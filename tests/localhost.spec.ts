import { test, expect } from '@playwright/test';

// Default to port 3000, but allow override via environment variable
const PORT = process.env.PORT || '3000';
const BASE_URL = `http://localhost:${PORT}`;

test.describe('Localhost Application Tests', () => {
  
  test('should scroll to contact form and fill in the data', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Scroll to the contact section
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    
    // Wait for the section to be visible
    await expect(contactSection).toBeVisible();
    
    // Fill in the name field
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeVisible();
    await nameInput.fill('John Doe');
    await expect(nameInput).toHaveValue('John Doe');
    
    // Fill in the email field
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    await emailInput.fill('john.doe@example.com');
    await expect(emailInput).toHaveValue('john.doe@example.com');
    
    // Fill in the company field
    const companyInput = page.locator('input[name="company"]');
    await expect(companyInput).toBeVisible();
    await companyInput.fill('Acme Corporation');
    await expect(companyInput).toHaveValue('Acme Corporation');
    
    // Fill in the message field
    const messageTextarea = page.locator('textarea[name="message"]');
    await expect(messageTextarea).toBeVisible();
    await messageTextarea.fill('This is a test message to verify the contact form functionality.');
    await expect(messageTextarea).toHaveValue('This is a test message to verify the contact form functionality.');
    
    // Verify the submit button is visible and enabled
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });
});
