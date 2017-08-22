import { LojaPage } from './app.po';

describe('loja App', () => {
  let page: LojaPage;

  beforeEach(() => {
    page = new LojaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
