import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TestAppApp} from '../app/test-app';

beforeEachProviders(() => [TestAppApp]);

describe('App: TestApp', () => {
  it('should have the `defaultMeaning` as 42', inject([TestAppApp], (app: TestAppApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TestAppApp], (app: TestAppApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

