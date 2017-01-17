import { browser, element, by } from 'protractor';

export class BookMonkeyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bm-root h1')).getText();
  }
}
