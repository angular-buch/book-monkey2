/*
Workaround to make Angular2 aware of relative paths for templateUrl and styleUrls

see http://schwarty.com/2015/12/22/angular2-relative-paths-for-templateurl-and-styleurls/
see https://github.com/angular/angular/issues/2383 (Relative URL support in annotations)
see https://github.com/angular/angular/issues/6053 (Relative TemplateUrl with SystemJS)

1. you need to create a .d.ts file (e.g. shim.d.ts) containing (THIS FILE):
declare var module: any;

2. then reference it in your bootstrap file for example:
/// <reference path="moduleId-workaround.d.ts" />

3. you still need to have the typescript compilation (tsconfig.json) option set:
  "compilerOptions": { ... "module": "commonjs", ... },
*/

declare var module: any;
