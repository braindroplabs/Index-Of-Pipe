import { IndexOfPipePage } from './app.po';

describe('index-of-pipe App', function() {
  let page: IndexOfPipePage;

  beforeEach(() => {
    page = new IndexOfPipePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('index-of-pipe works!');
  });
});
