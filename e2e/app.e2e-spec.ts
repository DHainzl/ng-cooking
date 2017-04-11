import { NgCookingPage } from './app.po';

describe('ng-cooking App', () => {
  let page: NgCookingPage;

  beforeEach(() => {
    page = new NgCookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
