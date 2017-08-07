import { KitewaPage } from './app.po';

describe('kitewa App', () => {
  let page: KitewaPage;

  beforeEach(() => {
    page = new KitewaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
