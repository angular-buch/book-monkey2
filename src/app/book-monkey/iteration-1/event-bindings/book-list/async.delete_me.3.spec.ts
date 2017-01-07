// this is just a little test for async tests
// this is not part of the BookMonkey and will be deleted during build

import { fakeAsync, tick } from '@angular/core/testing';

describe('async tests', () => {
  it('can be also simplified via fakeAsync() and tick()', fakeAsync(() => {

    let flag = false;

    setTimeout(() => {
      flag = true;
    }, 500);

    tick(500);
    expect(flag).toBeTruthy();
  }));
});
