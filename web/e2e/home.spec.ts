import { expect, test } from '@playwright/test';

test('shows the Lume project foundation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Lume');
  await expect(
    page.getByRole('heading', { name: 'Gestão clara. Negócios mais fortes.' }),
  ).toBeVisible();
  await expect(page.getByText('Próximo marco')).toBeVisible();
});
