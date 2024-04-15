import test from "@playwright/test";
import Homepage from "e2e/pages/Homepage";

test.describe("Click Me Button Test", () => {
  test("Click the button", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.visit();
    await homepage.clickMeButton();
    await homepage.buttonClickText();
  });
});
