import { /*TEX:\bfs*/browser, element, by/*TEX:\bfe*/ } from 'protractor';

describe('dpunkt.verlag', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => /*TEX:\bfs*/browser.ignoreSynchronization = true/*TEX:\bfe*/);

  it('should just call it Angular', () => {
    /*TEX:\bfs*/browser/*TEX:\bfe*/.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = /*TEX:\bfs*/element/*TEX:\bfe*/(/*TEX:\bfs*/by/*TEX:\bfe*/.tagName('h3'));
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => /*TEX:\bfs*/browser.ignoreSynchronization = false/*TEX:\bfe*/);
});

