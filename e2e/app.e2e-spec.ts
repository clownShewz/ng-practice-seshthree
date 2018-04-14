import { NgPracticeSeshthreePage } from './app.po';

describe('ng-practice-seshthree App', () => {
  let page: NgPracticeSeshthreePage;

  beforeEach(() => {
    page = new NgPracticeSeshthreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
