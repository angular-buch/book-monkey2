import { browser, element, by } from 'protractor';

describe('dpunkt.verlag', () => {

  // does not wait for on angular on a non-angular page
  beforeAll(() => browser.ignoreSynchronization = true);

  it('should just call it Angular', () => {
    browser.get('http://dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = element(by.tagName('h3'));
    expect(heading.getText()).toEqual('Angular');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});

