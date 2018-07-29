import { browser, $ } from 'protractor';

import { checkConsole, indexPath } from '../../e2e-kit';

const appPath = indexPath(__dirname);

describe(appPath, async () => {

  beforeAll(async () => {
    await browser.waitForAngularEnabled(true);
    await browser.get(appPath);
  });

  it('should load without error', async () => {
    expect(await checkConsole()).toEqual('');
  });

  it('should calculate days remaining', async () => {
    expect(await $('b').getText()).toBe('284');
  });
});
