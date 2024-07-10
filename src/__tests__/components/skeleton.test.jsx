import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import React from 'react'

import Skeleton from '../../components/Skeleton'

describe('Skeleton Component', () => {
  test('renders correctly', () => {
    const { getByTestId, getAllByTestId } = render(<Skeleton />)

    const container = getByTestId('skeleton-container')
    const header = getByTestId('skeleton-header')
    const content = getByTestId('skeleton-content')
    const footer = getByTestId('skeleton-footer')

    expect(container).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(footer).toBeInTheDocument()

    const productCards = getAllByTestId('skeleton-product-card')
    expect(productCards.length).toBe(8)
  })
})
