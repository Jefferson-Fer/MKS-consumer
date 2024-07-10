import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import ModalProductInCart from '../../components/ModalProductInCart'

const productDataFn = [
  {
    id: 1,
    name: 'Name',
    price: 1,
    quantity: 1,
    image: 'image.jpg',
  },
  {
    id: 2,
    name: 'Name',
    price: 2,
    quantity: 2,
    image: 'image.jpg',
  },
]

jest.mock('../../store/CartProductContext', () => ({
  useProductCart: () => ({
    AddToCart: () => {},
    products: productDataFn,
  }),
}))

describe('ModalProductInCart', () => {
  test('should to be renders correctly', () => {
    const { getByText, getByTestId, getAllByTestId } = render(
      <ModalProductInCart isOpen={true} onClose={() => {}} />,
    )

    expect(getByText('Carrinho de compras')).toBeInTheDocument()
    expect(getByTestId('button-close')).toBeInTheDocument()
    expect(getAllByTestId('cart-item')).toHaveLength(2)
    expect(getByText('Total:')).toBeInTheDocument()
    expect(getByTestId('cart-amount')).toHaveTextContent('5')
    expect(getByText('Finalizar Compra')).toBeInTheDocument()
  })

  test('should not be rendered when closed', () => {
    const { queryByText } = render(
      <ModalProductInCart isOpen={false} onClose={() => {}} />,
    )

    expect(queryByText('Carrinho de compras')).not.toBeInTheDocument()
    expect(queryByText('Total:')).not.toBeInTheDocument()
    expect(queryByText('Finalizar compra')).not.toBeInTheDocument()
  })
})
