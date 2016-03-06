/// <reference path="../typings/main.d.ts" />

import { SamplesPage } from './app.po';

describe('samples App', function() {
  let page: SamplesPage;

  beforeEach(() => {
    page = new SamplesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('samples Works!');
  });
});
