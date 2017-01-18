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

  it('should select by tag', () => {
    expect(element(by.css('h1')).getText()).toBe('Heading');
    expect(element(by.tagName('h1')).getText()).toBe('Heading');
  });

  it('should select by css class', () => {
    expect(element(by.css('.myClass')).getText()).toBe('Heading');
    expect(element(by.className('myClass')).getText()).toBe('Heading');
  });

  it('should select by id', () => {
    expect(element(by.css('#myId')).getText()).toBe('Heading');
    expect(element(by.id('myId')).getText()).toBe('Heading');
  });

  it('should select via various other ways', () => {
    expect(element(by.cssContainingText('h1', 'Another Heading')).getText()).toBe('Another Heading with child');
    expect(element(by.css('h1 span')).getText()).toBe('with child');
  });

  it('should select via the $-shorthand', () => {
    // is the same as element(by.css('#myId'));
    expect($('#myId').getText()).toBe('Heading');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

