import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import Footer from '../../components/Footer'

describe('Footer component', () => {
  test('should to be render footer correctly', () => {
    const { getByText } = render(<Footer />)

    expect(
      getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeInTheDocument()
  })
})
