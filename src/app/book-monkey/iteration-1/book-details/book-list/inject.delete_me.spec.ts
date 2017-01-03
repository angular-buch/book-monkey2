// this is just a little test for inject()
// this is not part of the BookMonkey and will be deleted during build

import { Console } from '@angular/core/src/console';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';

describe('inject() creates an injector', () => {

  it('and injects the specified objects into the test',

    inject([Console], (console) => {
      console.log('Hello World!');
    })

  );
});
