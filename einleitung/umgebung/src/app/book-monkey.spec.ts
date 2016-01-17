import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {BookMonkeyApp} from '../app/book-monkey';

beforeEachProviders(() => [BookMonkeyApp]);

describe('App: BookMonkey', () => {
  it('should have the `defaultMeaning` as 42', inject([BookMonkeyApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([BookMonkeyApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

