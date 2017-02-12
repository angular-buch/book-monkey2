import { browser, element, by } from 'protractor';

export class BookMonkeyPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }
}
