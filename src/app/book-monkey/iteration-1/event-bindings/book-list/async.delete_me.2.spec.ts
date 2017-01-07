// this is just a little test for async tests
// this is not part of the BookMonkey and will be deleted during build

import { async } from '@angular/core/testing';

describe('async tests', () => {
  it('can be simplified via async()', async(() => {

    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
  }));
});
