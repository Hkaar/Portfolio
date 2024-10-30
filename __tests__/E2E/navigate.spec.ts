import { test, expect } from "@playwright/test";

test("Should navigate to the projects page", async ({page}) => {
    await page.goto("/");

    await page.click("text=Projects");

    await expect(page).toHaveURL("/projects");
    await expect(page.locator("h1")).toContainText("My Projects");
});

test("Should navigate to blog page", async ({page}) => {
    await page.goto("/");

    await page.click("text=Blog");

    await expect(page).toHaveURL("/blog");
    await expect(page.locator("h1")).toContainText("My Blog");
});

test("Should navigate to contact page", async ({page}) => {
    await page.goto("/");

    await page.click("text=Contact");

    await expect(page).toHaveURL("/contact");
    await expect(page.locator("h3")).toContainText("Need help for your project?");
});