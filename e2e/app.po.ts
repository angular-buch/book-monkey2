export class BookMonkeyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('BookMonkey-app h1')).getText();
  }
}
