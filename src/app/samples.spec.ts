import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {SamplesApp} from '../app/samples';

beforeEachProviders(() => [SamplesApp]);

describe('App: Samples', () => {
  it('should have the `defaultMeaning` as 42', inject([SamplesApp], (app: SamplesApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([SamplesApp], (app: SamplesApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

