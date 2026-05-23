import {test as setup} from '@playwright/test';
import {LoginPage} from '../pages/login.page';

// we define path where the file with cookies and session info is saved
const authFile = 'playwright/.auth/user.json';

setup('User authentication to global suite.', async({page}) => {
  const loginPage = new LoginPage(page);

  // we execute the real login flow
  await loginPage.navigateTo();
  await loginPage.login('standard_user', 'secret_sauce');

  // we wait to the wright url to we stay sure that login was finished
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // save cookies and localstorage at the disk
  await page.context().storageState({path: authFile});
})
