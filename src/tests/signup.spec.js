import { expect, test } from '@playwright/test'

test('Should test user signup flow', async ({ page }) => {
  await page.goto('http://localhost:3122/')

  const signupLink = await page.getByRole('link', { name: 'Sign up' })
  expect(signupLink).toBeVisible()
  expect(signupLink).toHaveText('Sign up')
  expect(signupLink).toHaveAttribute('href', '/signup')
  await signupLink.click()
  expect(page).toHaveURL('http://localhost:3122/signup')

  const title = await page.getByRole('heading', { name: 'Sign up' })
  expect(title).toBeVisible()
  expect(title).toHaveText('Sign up')
  const subtitle = page.getByRole('heading', { name: 'Patient' })
  expect(subtitle).toBeVisible()
  expect(subtitle).toHaveText('Patient')
  const emailInput = await page.getByPlaceholder('Email *')
  expect(emailInput).toBeVisible()
  expect(emailInput).toHaveAttribute('type', 'email')
  expect(emailInput).toHaveAttribute('name', 'email')
  /* expect(emailInput).toHaveAttribute('placeholder', 'Email *') */

  const mobileInput = await page.getByPlaceholder('Mobile *')
  expect(mobileInput).toBeVisible()
  expect(mobileInput).toHaveAttribute('type', 'tel')
  expect(mobileInput).toHaveAttribute('name', 'mobile')
  expect(mobileInput).toHaveAttribute('placeholder', 'Mobile *')
  /*  expect(mobileInput).toHaveAttribute('required', '') */
  const signupButton = await page.getByRole('button', { name: 'Sign up' })
  expect(signupButton).toBeVisible()
  expect(signupButton).toHaveText('Sign up')
  /*  expect(signupButton).toHaveAttribute('type', 'submit') */
  await signupButton.click()
  await page
    .locator('#layout div:has-text("Enter an emailEnter a mobile number")')
    .nth(3)
    .click()
})