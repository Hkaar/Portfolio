import { expect, test } from "@playwright/test";

test("Should navigate to the projects page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Projects");

    await expect(page).toHaveURL("/projects");
    await expect(page.locator("h1")).toContainText("My Projects");
});

test("Should navigate to blog page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Blog");

    await expect(page).toHaveURL("/blog");
    await expect(page.locator("h1")).toContainText("My Blog");
});

test("Should navigate to contact page", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Contact");

    await expect(page).toHaveURL("/contact");
    await expect(page.locator("h3")).toContainText(
        "Need help for your project?",
    );
});

test("Should navigate to a project", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Projects");
    await page.waitForURL("**/projects");

    await expect(page).toHaveURL("/projects");

    await page.locator("div:nth-child(3) > a").first().click();
    await page.getByRole("heading", { name: "Seven Books" }).click();
    await expect(page.locator("h1")).toContainText("Seven Books");
});

test("Should navigate to a blog", async ({ page }) => {
    await page.goto("/");

    await page.click("text=Blog");
    await page.waitForURL("**/blog");
    
    await expect(page).toHaveURL("/blog");

    await page.getByRole("link", { name: "Read More" }).nth(1).click();
    await expect(page.locator("h1")).toContainText(
        "Laravel Storage not Working?",
    );
});

test('Should show not found for blog', async ({ page }) => {
    await page.goto('/blog/notfounderror');
    
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.getByRole('paragraph')).toContainText('Sorry, looks like that blog doesn’t exist!');
});

test('Should show not found for projects', async ({ page }) => {
    await page.goto('/projects/notfounderror');
    
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.getByRole('paragraph')).toContainText('Sorry, looks like that project doesn’t exist!');
});