describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it.only('should pass smoke test', async () => {
    // console.log(element(by.id('stepOne')));
    await expect(element(by.id('whatsup'))).toExist();
    await expect(element(by.id('whatsup-text'))).toHaveText('Whatsup');
    await expect(element(by.id('whatsup'))).toBeVisible();
    const imgPath = await element(by.id('whatsup')).takeScreenshot('whatsup');
    console.log(imgPath);
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
