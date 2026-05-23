import { test, expect, Page } from '@playwright/test';
import { InventoryPage } from '../pages/inventory.page';

test.describe('Tests on Product Dashboard.', () => {
  test('We should be able to view the inventory page directly', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    // we go to internal url directly 
    await inventoryPage.navigateTo();

    await expect(inventoryPage.productsTitle).toBeVisible();
  });

  test('It should allow interaction with internal elements.', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();

    await inventoryPage.firstProductAddButton.click();
    await expect(inventoryPage.firstProductAddButton).toContainText('Remove');
  });
});


