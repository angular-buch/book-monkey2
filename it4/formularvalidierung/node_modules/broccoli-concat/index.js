var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var helpers = require('broccoli-kitchen-sink-helpers')
var Writer = require('broccoli-writer')
var jsStringEscape = require('js-string-escape')
var crypto = require('crypto')
var quickTemp = require('quick-temp')
var glob = require('glob')

module.exports = Concat

Concat.prototype = Object.create(Writer.prototype)
Concat.prototype.constructor = Concat
function Concat(inputTree, options) {
  if (!(this instanceof Concat)) return new Concat(inputTree, options)
  this.inputTree = inputTree
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key]
    }
  }

  this.cache = {}
  this.cachedConcatenatedOutputHash = null
}

Concat.prototype.DEFAULT_SEPARATOR = '\n'

Concat.prototype.getWrapInEval = function () {
  // default to false for now
  return this.wrapInEval == null ? false : this.wrapInEval;
};

Concat.prototype.getWrapInFunction = function() {
  // default to true for backwards compatibility
  return this.wrapInFunction == null ? true : this.wrapInFunction;
};

Concat.prototype.getCacheDir = function () {
  return quickTemp.makeOrReuse(this, 'tmpCacheDir')
}
Concat.prototype.cleanup = function(){
  Writer.prototype.cleanup.call(this)
  quickTemp.remove(this, 'tmpCacheDir')
}

Concat.prototype.write = function (readTree, destDir) {
  var self = this
  return readTree(this.inputTree).then(function (srcDir) {
    var modulesAdded = {}
    var output = []

    if (self.header) {
      output.push(self.header)
    }

    // When we are done compiling, we replace self.cache with newCache, so that
    // unused cache entries are garbage-collected
    var newCache = {}

    try {
      var inputFiles = helpers.multiGlob(filterInputFiles(self, srcDir), {cwd: srcDir})
      for (i = 0; i < inputFiles.length; i++) {
        var stat = getStat(srcDir + '/' + inputFiles[i]);
        if (stat && stat.isFile()) {
          addFile(inputFiles[i], stat)
        }
      }
    } catch(error) {
      if (!self.allowNone || !error.message.match("did not match any files")) {
        throw error;
      }
    }

    if (self.footer) {
      output.push(self.footer)
    }

    helpers.assertAbsolutePaths([self.outputFile])
    mkdirp.sync(path.join(destDir, path.dirname(self.outputFile)))
    var separator = self.separator == null ? self.DEFAULT_SEPARATOR : self.separator
    var concatenatedOutput = output.join(separator)
    var concatenatedOutputHash = crypto.createHash('md5').update(concatenatedOutput).digest('hex')
    var cacheDir = self.getCacheDir()
    if (concatenatedOutputHash === self.cachedConcatenatedOutputHash) {
      try {
        fs.linkSync(path.join(cacheDir, "cached-output"), path.join(destDir, self.outputFile));
      } catch (error) {
        fs.writeFileSync(path.join(destDir, self.outputFile), fs.readFileSync(path.join(cacheDir, "cached-output")));
      }
    } else {
      fs.writeFileSync(path.join(destDir, self.outputFile), concatenatedOutput)
      fs.writeFileSync(path.join(cacheDir, "cached-output"), concatenatedOutput)
    }
    self.cachedConcatenatedOutputHash = concatenatedOutputHash

    self.cache = newCache

    function addFile (filePath, stat) {
      // This function is just slow enough that we benefit from caching
      var statsHash = helpers.hashStats(stat, filePath)
      var cacheObject = self.cache[statsHash]
      if (cacheObject == null) { // cache miss
        var fileContents = fs.readFileSync(srcDir + '/' + filePath, { encoding: 'utf8' })
        if (self.getWrapInEval()) {
          fileContents = wrapInEval(fileContents, filePath, self.getWrapInFunction())
        }
        cacheObject = {
          output: fileContents
        }
      }
      newCache[statsHash] = cacheObject
      output.push(cacheObject.output)
    }
  })
}

function wrapInEval (fileContents, fileName, wrapInFunction) {
  // Should pull out copyright comment headers
  // Eventually we want source maps instead of sourceURL
  var output = 'eval("'

  if (wrapInFunction) {
    output += '(function() {'
  }

  output += jsStringEscape(fileContents)

  if (wrapInFunction) {
    output += '})();'
  }

  output += '//# sourceURL=' + jsStringEscape(fileName) +
            '");\n'

  return output
}

function getStat(path) {
  try {
    return fs.statSync(path);
  } catch(error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    return null;
  }
}

function filterInputFiles(self, srcDir) {
  if(self.allowNone) {
    var filteredInputFiles = [];
    for (var i = 0; i < self.inputFiles.length; i++) {
      if(glob.sync(self.inputFiles[i], {cwd: srcDir}).length > 0) {
        filteredInputFiles.push(self.inputFiles[i]);
      }
    }
    return filteredInputFiles;
  } else {
    return self.inputFiles;
  }
};
