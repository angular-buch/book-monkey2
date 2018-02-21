import { browser, element, by } from 'protractor';

export class /*TEX:\bfs*/BookDetailsPage/*TEX:\bfe*/ {

  getHeaderText() {
    return element(by.css('h1.header')).getText();
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}

export class /*TEX:\bfs*/BookListPage/*TEX:\bfe*/ {

  navigateTo() {
    browser.get('/books');/*TEX:\bfs*/
    return this;/*TEX:\bfe*/
  }

  getBookItems() {
    return element.all(by.css('.bm-book-list-item'));
  }

  clickOnFirstBook() {
    this.getBookItems().first().click();
    return new BookDetailsPage();
  }
}
