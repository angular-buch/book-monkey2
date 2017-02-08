import { browser, element, by, $ } from 'protractor';

const html = `
  <h1 id="myId" class="myClass">Heading</h1>
  <h1 class="anotherClass">Another Heading <span>with child</span></h1>
`;

describe('protractor locators', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get('data:text/html,' + encodeURIComponent(html));
  });

  it('should select <TEX>\bfseries by tag</TEX>', () => {
    expect(element(by.css('<TEX>\bfseries h1</TEX>')).getText()).toBe('Heading');
    expect(element(by.tagName('h1')).getText()).toBe('Heading');
  });

  it('should select <TEX>\bfseries by css class</TEX>', () => {
    expect(element(by.css('<TEX>\bfseries .myClass</TEX>')).getText()).toBe('Heading');
    expect(element(by.className('<TEX>\bfseries myClass</TEX>')).getText()).toBe('Heading');
  });

  it('should select <TEX>\bfseries by id</TEX>', () => {
    expect(element(by.css('<TEX>\bfseries \#myId</TEX>')).getText()).toBe('Heading');
    expect(element(by.id('<TEX>\bfseries myId</TEX>')).getText()).toBe('Heading');
  });

  it('should select via various other ways', () => {
    expect(element(by.cssContainingText('h1', 'Another Heading')).getText()).toBe('Another Heading with child');
    expect(element(by.css('h1 span')).getText()).toBe('with child');
  });

  it('should select via the <TEX>\bfseries \$-shorthand</TEX>', () => {
    // is the same as element(by.css('\#myId'));
    expect(<TEX>\bfseries \$('\#myId')</TEX>.getText()).toBe('Heading');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

