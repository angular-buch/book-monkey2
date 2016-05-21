export class BookMonkeyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('book-monkey-app h1')).getText();
  }
}
