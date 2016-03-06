'use strict'

var path     = require('path')
var concat   = require('..')
var expect   = require('expect.js')
var root     = process.cwd()
var fs       = require('fs')
var broccoli = require('broccoli')

var builder

describe('broccoli-concat', function(){
  var initialTmpContents;

  function readFile(path) {
    return fs.readFileSync(path, {encoding: 'utf8'})
  }

  function getMtime(path) {
    return fs.lstatSync(path).mtime
  }

  function chdir(path) {
    process.chdir(path)
  }

  before(function() {
    if (!fs.existsSync('tmp')) {
      fs.mkdirSync('tmp');
    }
  });

  beforeEach(function() {
    chdir(root)
    initialTmpContents = fs.readdirSync('tmp');
  })

  afterEach(function() {
    if (builder) {
      builder.cleanup()
    }

    expect(fs.readdirSync('tmp')).to.eql(initialTmpContents);
  })

  describe('with defaults', function(){
    it('joins contents together with a newline', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql('var foo = "bar";\nvar bar = "baz";')
      })
    })
    it('reuses cached files if nothing has changed', function(done){
      this.timeout(10000);
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
      })

      var firstMtime, secondMtime
      builder = new broccoli.Builder(tree);
      builder.build().then(function(results) {
        firstMtime = getMtime(results.directory + '/out.js')
        //need to wait a moment to guarantee mtime change
        setTimeout(function(){
          builder.build().then(function(results){
            secondMtime = getMtime(results.directory + '/out.js')
            try {
              expect(secondMtime).to.eql(firstMtime)
              done()
            } catch(e) {
              done(e)
            }
          }, function(e){
              done(e)
          })
        }, 1000)
      })
    })
  })

  describe('with a custom separator', function(){
    it('joins contents together with the specified separator', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
        separator: '\n// separator \n'
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql('var foo = "bar";\n// separator \nvar bar = "baz";')
      })
    })
  })

  describe('with wrapInEval set to true', function(){
    it('wraps each file in eval with sourceURL set', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
        wrapInEval: true
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql(
          'eval("(function() {var foo = \\\"bar\\\";})();//# sourceURL=a-file.js");\n\n'+
          'eval("(function() {var bar = \\\"baz\\\";})();//# sourceURL=another-file.js");\n'
        )
      })
    })
  })

  describe('with wrapInFunction set to false', function(){
    it('does not wrap the output in a self-invoking function', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
        wrapInEval: true,
        wrapInFunction: false
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql(
          'eval("var foo = \\\"bar\\\";//# sourceURL=a-file.js");\n\n'+
          'eval("var bar = \\\"baz\\\";//# sourceURL=another-file.js");\n'
        )
      })
    })
  })

  describe('with header', function(){
    it('prepends a header', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
        header: 'HEADER**HEADER'
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql('HEADER**HEADER\nvar foo = "bar";\nvar bar = "baz";')
      })
    })
  })

  describe('with footer', function(){
    it('appends a footer', function(){
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.js'],
        outputFile: '/out.js',
        footer: 'FOOTER**FOOTER'
      })

      builder = new broccoli.Builder(tree);
      return builder.build().then(function(results) {
        var dir = results.directory;
        expect(readFile(dir + '/out.js')).to.eql('var foo = "bar";\nvar bar = "baz";\nFOOTER**FOOTER')
      })
    })
  })

  describe('with no matches', function() {
    it('outputs empty file with allowNone', function() {
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.css'],
        outputFile: '/out.css',
        allowNone: true
      });

      builder = new broccoli.Builder(tree)
      return builder.build().then(function(results) {
        var dir = results.directory
        expect(readFile(dir + '/out.css')).to.eql('');
      })
    })

    it('processed each input file if an earlier raises with allowNone', function() {
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.css', '*.js'],
        outputFile: '/out.wat',
        allowNone: true
      });

      builder = new broccoli.Builder(tree)
      return builder.build().then(function(results) {
        var dir = results.directory
        expect(readFile(dir + '/out.wat')).to.not.be.empty();
      })
    })

    it('throws error without allowNone', function() {
      var sourcePath = 'tests/fixtures'
      var tree = concat(sourcePath, {
        inputFiles: ['*.css'],
        outputFile: '/out.css'
      });

      builder = new broccoli.Builder(tree)
      return builder.build().then(function(results) {
        expect().fail('allowNone option did not work')
      }).catch(function(error) {
        expect(true).to.be.ok()
      })
    })
  })
});
