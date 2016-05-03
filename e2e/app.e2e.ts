import { BookMonkeyPage } from './app.po';

describe('BookMonkey App', function() {
  let page: BookMonkeyPage;

  beforeEach(() => {
    page = new BookMonkeyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BookMonkey works!');
  });
});
