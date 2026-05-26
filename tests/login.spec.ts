import {test, expect} from '../fixtures';
import { credentials } from '../test-data/testData';

test('valid login', async ({loginPage}) => {
    await loginPage.login(credentials.username, credentials.password);
    expect(await loginPage.isInventoryPageVisible()).toBe(true);
})

test('invalid login', async ({loginPage}) => {
    await loginPage.login(credentials.invalidUsername, credentials.invalidPassword);
    expect(await loginPage.isErrorMessageVisible()).toBe(true);
});
