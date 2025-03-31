import { test, expect, chromium } from '@playwright/test';

test('Fazer login no site', async () => {
  // Inicia o navegador (modo visível para debug)
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Acessa a página de login
  await page.goto('https://automationpratice.com.br/login', { timeout: 60000 });

  // Aguarda os campos de e-mail e senha ficarem visíveis
  await page.waitForSelector('#user', { timeout: 10000 });
  await page.waitForSelector('#password', { timeout: 10000 });

  // Insere os dados de login
  await page.fill('#user', 'teste@email.com');
  await page.fill('#password', '123456');

  // Clica no botão de login usando o 'getByRole'
  const loginButton = await page.locator('role=button[name="login"]');
  await loginButton.click();

  // Aguarda um feedback da página
  await page.waitForTimeout(5000);

  // Exibe o título da página após login (para verificar se deu certo)
  console.log('Título da página após login:', await page.title());

  // Fecha o navegador
  await browser.close();
});
