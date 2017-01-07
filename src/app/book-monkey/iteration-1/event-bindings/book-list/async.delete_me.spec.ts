// this is just a little test for async()
// this is not part of the BookMonkey and will be deleted during build

describe('async tests', () => {
  it('usually need a signal that execution has been finished', (done) => {

    setTimeout(() => {
      expect(true).toBeTruthy();
      done(); // !!!
    }, 500);
  });
});


import { async } from '@angular/core/testing';

describe('async tests', () => {
  it('can be simplified via async()', async(() => {

    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
  }));
});


import { fakeAsync, tick } from '@angular/core/testing';

describe('async tests', () => {
  it('can be also simplified via fakeAsync() and tick()', fakeAsync(() => {

    let flag = false;

    setTimeout(() => {
      flag = true;
    }, 500);

    tick(500);
    expect(flag).toBe(true);
  }));
});
