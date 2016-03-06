export class SamplesPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Samples-app p')).getText(); }
}
