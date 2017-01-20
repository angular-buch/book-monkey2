import { BookMonkeyPage } from './app.po';

describe('book-monkey App', function() {
  let page: BookMonkeyPage;

  beforeEach(() => {
    page = new BookMonkeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular\nEinstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen');
  });
});
