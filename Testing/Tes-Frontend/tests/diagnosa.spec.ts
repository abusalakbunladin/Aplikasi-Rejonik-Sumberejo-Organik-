import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('banner').getByRole('link', { name: 'Produk' }).click();
  await page.getByRole('button', { name: 'Pesan' }).first().click();
  await page.getByRole('button', { name: 'Pesan' }).nth(1).click();
  await page.getByRole('button', { name: 'Pesan' }).nth(2).click();
  await page.getByRole('banner').getByRole('link', { name: 'Keunggulan' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Sertifikat' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Tentang Kami' }).click();
  await page.getByRole('link', { name: 'Kontak' }).click();
});