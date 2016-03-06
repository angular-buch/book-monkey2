# broccoli-concat

[![Build Status](https://travis-ci.org/rlivsey/broccoli-concat.svg?branch=master)](https://travis-ci.org/rlivsey/broccoli-concat)

Concatenate trees into a single file.

## Usage

```js
var concat = require('broccoli-concat');

var concatenated = concat(sourceTree, {
  inputFiles: [
    'app/**/*.css'
  ],
  outputFile: '/assets/app.css',
  separator: '\n', // (optional, defaults to \n)
  wrapInEval: true, // (optional, defaults to false)
  wrapInFunction: false, // (optional, defaults to true)
  header: '/** Copyright Acme Inc. 2014 **/', // (optional)
  footer: '/** END OF FILE **/' // (optional)
});
```

## Options

* inputFiles - the order of files may be important to solve dependencies, [globbing](https://www.npmjs.org/package/glob) is also supported
* separator - what to separate the files with, defaults to '\n'
* wrapInEval - whether to wrap in eval for sourceURL, defaults to false as causes problems with global variables
* wrapInFunction - whether to wrap output in self-invoking function when wrapping output in eval, defaults to true
* header - string to prepend to beginning of combined file, separated from beginning of file contents by `separator`
* footer - string to append to end of combined file, separated from end of file contents by `seperator`

## Running Tests

```javascript
npm install
npm test
```

## License

This project is distributed under the MIT license.
