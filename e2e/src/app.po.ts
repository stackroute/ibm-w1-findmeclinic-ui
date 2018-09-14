import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-landing-page button')).getText();
  }
  getPatientButton(){
    return element(by.cssContainingText('button','Patient'));
  }
}
