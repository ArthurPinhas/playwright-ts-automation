# Playwright TypeScript Automation

E2E test automation framework built with Playwright and TypeScript, using Page Object Model (POM) architecture.

## Stack

- [Playwright](https://playwright.dev/) — test framework
- TypeScript
- Page Object Model (POM)
- GitHub Actions CI

## Project Structure

├── api/                # API client wrapper
│   └── ApiClient.ts
├── models/             # TypeScript interfaces for API responses
│   └── User.ts
├── pages/              # Page Object classes
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/              # Test specs
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── api.spec.ts
├── testData.ts         # Test data loaded from environment variables
├── .env                # Local credentials (not committed)
└── playwright.config.ts

## Test Coverage

- Valid login
- Invalid login with error message assertion
- Add product to cart and verify cart count
- API: GET user by ID with typed response model

## Setup

```bash
npm install
npx playwright install
```

## Environment Variables

Create a `.env` file in the project root before running tests:

USERNAME=your_username
PASSWORD=your_password
INVALID_USERNAME=invalid_user
INVALID_PASSWORD=invalid_password

## Run Tests

```bash
npx playwright test
npx playwright test tests/login.spec.ts
npx playwright test --headed
```

## CI

Tests run automatically on every push via GitHub Actions.