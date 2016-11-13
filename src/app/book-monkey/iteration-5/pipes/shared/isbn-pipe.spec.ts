import { IsbnPipe } from './isbn-pipe';

describe('IsbnPipe', () => {

  let isbnPipe = new IsbnPipe();

  it('should ignore unkown values', () => {
    expect(isbnPipe.transform('XXX', true)).toBe(null);
  });

  it('should add a prefix', () => {
    expect(isbnPipe.transform('3864903572', true)).toMatch(/^ISBN-10: /);
    expect(isbnPipe.transform('9783864903571', true)).toMatch(/^ISBN-13: /);
  });

  it('should keep ISBN-10 unchanged', () => {
    expect(isbnPipe.transform('3864903572', false)).toBe('3864903572');
  });

  it('should format ISBN-13 with a dash', () => {
    expect(isbnPipe.transform('9783864903571', false)).toBe('978-3864903571');
  });
});
