// this is just a little test for async tests
// this is not part of the BookMonkey and will be deleted during build

describe('async tests', () => {
  it('require a signal that execution has been finished', (done) => {

    setTimeout(() => {
      expect(true).toBeTruthy();
      done(); // !!!
    }, 500);
  });
});
