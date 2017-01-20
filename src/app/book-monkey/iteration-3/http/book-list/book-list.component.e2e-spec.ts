import { BookListPage } from './book-list.po';

fdescribe('Books Page', function() {

  let listPage: BookListPage;

  beforeEach(() => {
    listPage = new BookListPage();
  });

  it('should display at least two books', () => {

    const bookItems = listPage.navigateTo().getBookItems();
    expect(bookItems.count()).toBeGreaterThanOrEqual(2);
  });

  it('should navigate to details page by ISBN', () => {

    const detailsPage = listPage.navigateTo().clickOnFirstBook();

    expect(detailsPage.getUrl).toContain('/books/9783864903571');
    expect(detailsPage.getHeaderText()).toBe('Angular');
  });
});
