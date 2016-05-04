import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BookMonkeyAppComponent } from '../app/book-monkey.component';

beforeEachProviders(() => [BookMonkeyAppComponent]);

describe('App: BookMonkey', () => {
  it('should create the app',
      inject([BookMonkeyAppComponent], (app: BookMonkeyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'book-monkey works!\'',
      inject([BookMonkeyAppComponent], (app: BookMonkeyAppComponent) => {
    expect(app.title).toEqual('book-monkey works!');
  }));
});
