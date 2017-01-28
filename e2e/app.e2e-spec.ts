import { DodaxTestPage } from './app.po';

describe('dodax-test App', function() {
  let page: DodaxTestPage;

  beforeEach(() => {
    page = new DodaxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
