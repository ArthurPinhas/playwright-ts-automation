import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';

let apiClient: ApiClient;

test.beforeEach(async ({ request }) => {
    apiClient = new ApiClient(request);
});

test('API test', async () => {
    const user = await apiClient.getUser(1);
    expect(user.email).toBe('Sincere@april.biz');
});