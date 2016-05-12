export class IndexOfPipePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('index-of-pipe-app h1')).getText();
  }
}
