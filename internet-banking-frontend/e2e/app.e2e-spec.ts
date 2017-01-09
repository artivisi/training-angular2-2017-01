import { InternetBankingFrontendPage } from './app.po';

describe('internet-banking-frontend App', function() {
  let page: InternetBankingFrontendPage;

  beforeEach(() => {
    page = new InternetBankingFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
