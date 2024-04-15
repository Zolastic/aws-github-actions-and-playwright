import { expect, type Locator, type Page } from "@playwright/test";

export default class Homepage {
  readonly page: Page;
  readonly url: string = "/";
  readonly clickMeButtonLocator: Locator;
  readonly buttonClickTextLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickMeButtonLocator = this.page.getByTestId("click-me-button");
    this.buttonClickTextLocator = this.page.getByText("Button Clicked!");
  }

  async visit() {
    await this.page.goto(this.url);
  }

  async clickMeButton() {
    await this.clickMeButtonLocator.click();
  }

  async buttonClickText() {
    await expect(this.buttonClickTextLocator).toBeVisible();
  }
}
