import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Authentication Flow - SauceDemo', () => {
  test('Should be abel to log in successfully with valid credentials.', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // go to page
    await loginPage.navigateTo();

    // execute login action
    await loginPage.login('standard_user', 'secret_sauce');

    // Validation (assertion) - url change to inventory
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Should be abel to show an error with invalid credentials.', async ({ page }) => {
    const loginPage2 = new LoginPage(page);
    
    await loginPage2.navigateTo();
    await loginPage2.login('invalid_user', 'invalid_key');

    // validation (assertion) - Check error message is visible and valid
    await expect(loginPage2.errorMessage).toBeVisible();
    await expect(loginPage2.errorMessage).toContainText('Username and password do not match any user');
  });
});
