import { expect, test } from '@playwright/test'

test('Should test forgot password flow', async ({ page }) => {
  await page.goto('http://localhost:3122/')

  const pageHeading = await page.getByRole('heading', {
    name: 'Welcome to CARELYO'
  })
  expect(pageHeading).toBeVisible()
  expect(pageHeading).toHaveText('Welcome to CARELYO')

  const forgotPasswordLink = await page.getByRole('link', {
    name: 'Forgot password?'
  })
  expect(forgotPasswordLink).toBeVisible()
  expect(forgotPasswordLink).toHaveText('Forgot password?')
  expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password')
  await forgotPasswordLink.click()
  await expect(page).toHaveURL('http://localhost:3122/forgot-password')

  const FPHeading = await page.getByRole('heading', { name: 'Forgot Password' })
  expect(FPHeading).toBeVisible()
  expect(FPHeading).toHaveText('Forgot Password')

  const FBImage = await page.getByRole('presentation')
  expect(FBImage).toBeVisible()
  expect(FBImage).toHaveAttribute(
    'src',
    '/src/Assets/images/forgotPassword/forgot.png'
  )
  /* expect(FBImage).toHaveAttribute('alt', 'Forgot Password Illustration') */

  const FPEmailInput = await page.getByPlaceholder('Email *')
  expect(FPEmailInput).toBeVisible()
  expect(FPEmailInput).toHaveAttribute('type', 'email')
  expect(FPEmailInput).toHaveAttribute('name', 'email')
  expect(FPEmailInput).toHaveAttribute('placeholder', 'Email *')
  expect(FPEmailInput).toHaveAttribute('required', '')

  const SubmitBtn = await page.getByRole('button', {
    name: 'Send password reset email'
  })
  expect(SubmitBtn).toBeVisible()
  expect(SubmitBtn).toHaveText('Send password reset email')
  expect(SubmitBtn).toHaveAttribute('type', 'submit')

  await FPEmailInput.fill('email@email.com')
  await SubmitBtn.click()

  // write tests for success screen
})