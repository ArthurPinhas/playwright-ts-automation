# Playwright TypeScript Automation

E2E test automation framework built with Playwright and TypeScript, using Page Object Model (POM) architecture.

## Stack

- [Playwright](https://playwright.dev/) — test framework
- TypeScript
- Page Object Model (POM)
- GitHub Actions CI

## Project Structure

├── pages/              # Page Object classes
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/              # Test specs
│   ├── login.spec.ts
│   └── cart.spec.ts
├── testData.ts         # Credentials and test data
└── playwright.config.ts

## Test Coverage

- Valid login
- Invalid login with error message assertion
- Add product to cart and verify cart count

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npx playwright test
npx playwright test tests/login.spec.ts
npx playwright test --headed
```

## CI

Tests run automatically on every push via GitHub Actions.