import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('tombol Pesan di kartu produk bisa diklik', async ({ page }) => {
  await page.getByRole('banner').getByRole('link', { name: 'Produk' }).click();
  await page.getByRole('button', { name: 'Pesan' }).first().click();
  // tambahkan pengecekan hasil klik di sini, misalnya form/popup terbuka
});

test('tombol Help Support bisa diklik', async ({ page }) => {
  await page.getByRole('button', { name: 'Help Support' }).click();
});