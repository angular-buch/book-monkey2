import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {
<TEX>\boldline</TEX>    pipe = new IsbnPipe();
  });

  it('should ignore unknown values', () => {
<TEX>\boldline</TEX>    expect(pipe.transform('XXX', true)).toBe(null);
  });

  it('should add a prefix', () => {
<TEX>\boldline</TEX>    expect(pipe.transform('3864903572', true)).toMatch(/^ISBN-10: /);
<TEX>\boldline</TEX>    expect(pipe.transform('9783864903571', true)).toMatch(/^ISBN-13: /);
  });

  it('should not change the format of ISBN-10', () => {
<TEX>\boldline</TEX>    expect(pipe.transform('3864903572', false)).toBe('3864903572');
  });

  it('should format ISBN-13 with a dash', () => {
<TEX>\boldline</TEX>    expect(pipe.transform('9783864903571', false)).toBe('978-3864903571');
  });
});
