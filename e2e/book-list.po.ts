import { browser, element, by } from 'protractor';

export class <TEX>\bfseries BookDetailsPage</TEX> {

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class <TEX>\bfseries BookListPage</TEX> {

  navigateTo() {
    browser.get('/books');
<TEX>\boldline</TEX>    return this;
  }

  getBookItems() {
    return element.all(by.css('.bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
