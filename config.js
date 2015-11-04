System.config({
  paths: {
    "npm:*": "../node_modules/*",
    "npm2:*": "../node_modules/angular2/node_modules/*",
  },
  map: {
    "angular2": "npm:angular2",
    "reflect-metadata": "npm2:reflect-metadata",
    "zone.js": "npm2:zone.js/lib/zone.js",
    "es6-shim": "npm:es6-shim/es6-shim.js",
    "@reactivex/rxjs": "npm2:@reactivex/rxjs",
  },
  meta: {
    "angular2/angular2": {
      "deps": ["reflect-metadata", "zone.js", "es6-shim", "@reactivex/rxjs"]
    }
  },
  packages: {
    "app": { },
    "angular2": { },
    "reflect-metadata": {
        "main": "Reflect.js",
        "map": { "crypto": "@empty" }
    },
    "@reactivex/rxjs": {
        "main": "dist/cjs/Rx.js"
    }
  }
});
