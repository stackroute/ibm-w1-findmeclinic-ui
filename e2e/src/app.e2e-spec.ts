import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display download App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Download App');
  });
  it('should show Patient',()=>{
    page.navigateTo();
    expect(page.getPatientButton()).toBe('Login');
  })
  
});
