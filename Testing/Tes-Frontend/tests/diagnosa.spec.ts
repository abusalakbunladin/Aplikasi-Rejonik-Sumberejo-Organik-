import { test, expect } from '@playwright/test';

test('section produk terisi', async ({ page }) => {
  page.on('console', (m) => m.type() === 'error' && console.log('CONSOLE ERROR:', m.text()));
  page.on('requestfailed', (r) => console.log('REQUEST GAGAL:', r.url()));
  page.on('response', (r) => r.status() >= 400 && console.log(r.status(), r.url()));

  await page.goto('http://localhost:5173/');
  await page.getByRole('banner').getByRole('link', { name: 'Produk' }).click();
  await expect(page.getByText('Beras Original', { exact: true })).toBeVisible();
});