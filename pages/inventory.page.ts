import { Locator, Page} from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly firstProductAddButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.firstProductAddButton = page.locator('.btn_inventory').first();
  }

  async navigateTo() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

}