import {Locator, Page} from '@playwright/test';

export class LoginPage {
  // 1. Define type elements
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor (page: Page) {
    this.page = page;
    // 2. Initialize locators using good practices
    this.usernameInput = page.getByRole('textbox', {name: 'Username'});
    this.passwordInput = page.getByRole('textbox', {name: 'Password'});
    this.loginButton = page.getByRole('button', {name: 'Login'});
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // 3. action methods (user interactions)
  async navigateTo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}