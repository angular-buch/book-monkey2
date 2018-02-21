import { browser, element, by, $ } from 'protractor';

const html = `
  <h1 id="myId" class="myClass">Heading</h1>
  <h1 class="anotherClass">Another Heading
    <span>with child</span>
  </h1>`;

describe('protractor locators', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get('data:text/html,' + encodeURIComponent(html));
  });

  it('should select /*TEX:\bfs*/by tag/*TEX:\bfe*/', () => {
    expect(element(by.css('/*TEX:\bfs*/h1/*TEX:\bfe*/')).getText()).toBe('Heading');
    expect(element(by.tagName(/*TEX:\bfs*/'h1/*TEX:\bfe*/')).getText()).toBe('Heading');
  });

  it('should select /*TEX:\bfs*/by css class/*TEX:\bfe*/', () => {
    expect(element(by.css('/*TEX:\bfs*/.myClass/*TEX:\bfe*/')).getText()).toBe('Heading');
    expect(element(by.className('/*TEX:\bfs*/myClass/*TEX:\bfe*/')).getText()).toBe('Heading');
  });

  it('should select /*TEX:\bfs*/by id/*TEX:\bfe*/', () => {
    expect(element(by.css('/*TEX:\bfs*/\#myId/*TEX:\bfe*/')).getText()).toBe('Heading');
    expect(element(by.id('/*TEX:\bfs*/myId/*TEX:\bfe*/')).getText()).toBe('Heading');
  });

  it('should select via various other ways', () => {
    expect(element(by.cssContainingText('h1', 'Another Heading')).getText()).toBe('Another Heading with child');
    expect(element(by.css('h1 span')).getText()).toBe('with child');
  });

  it('should select via the /*TEX:\bfs*/\$-shorthand/*TEX:\bfe*/', () => {
    // is the same as element(by.css('\#myId'));
    expect(/*TEX:\bfs*/\$/*TEX:\bfe*/('/*TEX:\bfs*/\#myId/*TEX:\bfe*/').getText()).toBe('Heading');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

