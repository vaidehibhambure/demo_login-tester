import { expect, test } from '@playwright/test'

test('should test login flow', async ({ page }) => {
  await page.goto('http://localhost:3122/')
  const subHeading = await page.getByRole('heading', {
    name: 'Welcome to CARELYO'
  })
  expect(subHeading).toBeVisible()
  expect(subHeading).toHaveText('Welcome to CARELYO')

  const pageHeading = await page.getByRole('heading', { name: 'Log in' })
  expect(pageHeading).toBeVisible()
  expect(pageHeading).toHaveText('Log in')

  const signInImage = await page.getByRole('presentation').nth(1)
  expect(signInImage).toBeVisible()
  expect(signInImage).toHaveAttribute(
    'src',
    '/src/Assets/images/login/login.svg'
  )
  /* expect(signInImage).toHaveAttribute('alt', 'Log in Illustration') */

  const emailInput = await page.getByPlaceholder('Email or Mobile *')
  expect(emailInput).toBeVisible()
  expect(emailInput).toHaveAttribute('placeholder', 'Email or Mobile *')
  /*  expect(emailInput).toHaveAttribute('required', '') */
  const pwInput = await page.getByPlaceholder('Password *')
  expect(pwInput).toBeVisible()
  expect(pwInput).toHaveAttribute('type', 'password')
  expect(pwInput).toHaveAttribute('name', 'password')
  expect(pwInput).toHaveAttribute('placeholder', 'Password *')
  /* expect(pwInput).toHaveAttribute('required', '') */

  const shPwBtn = await page.getByRole('button', { name: 'Show password' })
  expect(shPwBtn).toBeVisible()
  expect(shPwBtn).toHaveAttribute('type', 'button')

  await shPwBtn.click()
  expect(pwInput).toHaveAttribute('type', 'text')

  await page.getByRole('button', { name: 'Login' }).click()
  await page
    .locator(
      '#layout div:has-text("Enter an email or mobileEnter your password")'
    )
    .nth(2)
    .click()
})