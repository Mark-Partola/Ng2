import { NgLearningPage } from './app.po';

describe('ng-learning App', function() {
  let page: NgLearningPage;

  beforeEach(() => {
    page = new NgLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
