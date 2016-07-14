import { SwapiAppPage } from './app.po';

describe('swapi-app App', function() {
  let page: SwapiAppPage;

  beforeEach(() => {
    page = new SwapiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
