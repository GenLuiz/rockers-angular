import { RockersAngularPage } from './app.po';

describe('rockers-angular App', () => {
  let page: RockersAngularPage;

  beforeEach(() => {
    page = new RockersAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
