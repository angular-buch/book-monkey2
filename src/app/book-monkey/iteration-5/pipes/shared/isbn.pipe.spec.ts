import { IsbnPipe } from './isbn.pipe';

describe('IsbnPipe', () => {

  let pipe: IsbnPipe;

  beforeEach(() => {/*TEX:\bfs*/
    pipe = new IsbnPipe();/*TEX:\bfe*/
  });

  it('should ignore unknown values', () => {/*TEX:\bfs*/
    expect(pipe.transform('XXX', true)).toBe(null);/*TEX:\bfe*/
  });

  it('should add a prefix', () => {/*TEX:\bfs*/
    expect(pipe.transform('3864903572', true)).toMatch(/^ISBN-10: /);
    expect(pipe.transform('9783864903571', true)).toMatch(/^ISBN-13: /);/*TEX:\bfe*/
  });

  it('should not change the format of ISBN-10', () => {/*TEX:\bfs*/
    expect(pipe.transform('3864903572', false)).toBe('3864903572');/*TEX:\bfe*/
  });

  it('should format ISBN-13 with a dash', () => {/*TEX:\bfs*/
    expect(pipe.transform('9783864903571', false)).toBe('978-3864903571');/*TEX:\bfe*/
  });
});
