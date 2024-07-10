import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Header from '../../components/Header'

describe('Header component', () => {
  test('should to be renders header correctly', () => {
    const { getByText, getByTestId } = render(<Header />)

    expect(getByText('MKS')).toBeInTheDocument()
    expect(getByText('Sistemas')).toBeInTheDocument()
    expect(getByTestId('cart-button')).toBeInTheDocument()
  })

  test('should to be render modal when button is clicked', () => {
    const { queryByText, getByText, getByTestId } = render(<Header />)

    expect(queryByText('Carrinho de compras')).toBeNull()

    fireEvent.click(getByTestId('cart-button'))
    expect(getByText('Carrinho de compras')).toBeInTheDocument()
  })

  test('should not to be render modal when button close is clicked', () => {
    const { queryByText, getByText, getByTestId } = render(<Header />)

    expect(queryByText('Carrinho de compras')).toBeNull()

    fireEvent.click(getByTestId('cart-button'))
    expect(getByText('Carrinho de compras')).toBeInTheDocument()

    fireEvent.click(getByTestId('button-close'))
    expect(queryByText('Carrinho de compras')).not.toBeInTheDocument()
  })
})
