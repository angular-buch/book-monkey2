import { IsbnPipe } from './isbn-pipe';

describe('IsbnPipe', () => {

  let pipe = new IsbnPipe();

  it('should ignore unkown values', () => {
    expect(pipe.transform('XXX', true)).toBe(null);
  });

  it('should add a prefix', () => {
    expect(pipe.transform('3864903572', true)).toMatch(/^ISBN-10: /);
    expect(pipe.transform('9783864903571', true)).toMatch(/^ISBN-13: /);
  });

  it('should keep ISBN-10 unchanged', () => {
    expect(pipe.transform('3864903572', false)).toBe('3864903572');
  });

  it('should format ISBN-13 with a dash', () => {
    expect(pipe.transform('9783864903571', false)).toBe('978-3864903571');
  });
});
