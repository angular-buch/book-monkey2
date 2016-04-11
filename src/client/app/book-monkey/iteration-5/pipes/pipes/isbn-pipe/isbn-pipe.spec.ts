import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {IsbnPipe} from './isbn-pipe';


describe('IsbnPipe Pipe', () => {

  beforeEachProviders(() => [IsbnPipe]);


  it('should transform the input', inject([IsbnPipe], (pipe:IsbnPipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));

});
