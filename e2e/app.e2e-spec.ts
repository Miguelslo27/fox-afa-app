import { AfaAppPage } from './app.po';

describe('afa-app App', () => {
  let page: AfaAppPage;

  beforeEach(() => {
    page = new AfaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
