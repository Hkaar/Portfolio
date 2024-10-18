import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/(main)/page';
 
test('Page', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 3, name: 'About myself' })).toBeDefined()
})