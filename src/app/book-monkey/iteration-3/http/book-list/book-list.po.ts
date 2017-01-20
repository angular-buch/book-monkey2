import { browser, element, by } from 'protractor';

export class BookDetailsPage {

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getUrl() {
    return browser.getLocationAbsUrl();
  }
}

export class BookListPage {

  navigateTo() {
    browser.get('https://iteration-3-http.angular-buch.com/books');
    return this;
  }

  getBookItems() {
    return element.all(by.css('bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
