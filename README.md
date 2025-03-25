# Playwright-Web

![Playwright](https://playwright.dev/img/playwright-logo.svg)

## 📌 Descrição
Repositório de automação de testes web utilizando **Playwright**. Inclui testes de interface (UI), boas práticas de automação e integração com CI/CD.

## 🚀 Tecnologias Utilizadas
- [Playwright](https://playwright.dev/)
- Node.js
- TypeScript (ou JavaScript, conforme preferência)
- Jest/Test Runner do Playwright
- GitHub Actions (para CI/CD, opcional)

## 🛠 Instalação
### 1️⃣ Clone o repositório
```sh
git clone https://github.com/seu-usuario/Playwright-Web.git
cd Playwright-Web
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Instale o Playwright e seus browsers
```sh
npx playwright install
```

## 📋 Como Executar os Testes
### ✅ Rodar todos os testes
```sh
npx playwright test
```

### 📌 Rodar testes em um navegador específico (Chrome, Firefox, WebKit)
```sh
npx playwright test --browser=chromium
```

### 📸 Rodar testes em modo UI interativo
```sh
npx playwright test --ui
```

## 📁 Estrutura do Projeto
```
Playwright-Web/
│── tests/            # Arquivos de teste
│   ├── example.spec.ts  # Exemplo de teste
│── pages/            # Page Object Model (POM)
│── playwright.config.ts # Configuração do Playwright
│── package.json      # Dependências e scripts
└── README.md         # Documentação
```

## 📌 Exemplo de Teste
```typescript
import { test, expect } from '@playwright/test';

test('Validar título da página', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
```

## 🔄 Integração com CI/CD (Opcional)
Adicione o seguinte workflow ao GitHub Actions (`.github/workflows/playwright.yml`):
```yml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout do código
        uses: actions/checkout@v3
      - name: Instalar dependências
        run: npm install
      - name: Instalar Playwright
        run: npx playwright install --with-deps
      - name: Executar testes
        run: npx playwright
