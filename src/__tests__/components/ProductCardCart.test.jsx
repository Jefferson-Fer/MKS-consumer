import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import ProductCardCart from '../../components/ProductCardCart'

const addToCartFn = jest.fn()
const removeProductQuantityCartFn = jest.fn()
const removeProductFn = jest.fn()

jest.mock('../../store/CartProductContext', () => ({
  useProductCart: () => ({
    AddToCart: addToCartFn,
    RemoveProductQuantityCart: removeProductQuantityCartFn,
    RemoveProduct: removeProductFn,
  }),
}))

const productData = {
  id: 1,
  name: 'Name',
  price: 1,
  image: 'image.jpg',
  quantity: 2,
}

describe('ProductCardCart component', () => {
  test('should to be renders correctly', () => {
    const { getByText, getByRole } = render(
      <ProductCardCart {...productData} />,
    )

    expect(getByText(productData.name)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', productData.image)
    expect(getByText(`Qtd:`)).toBeInTheDocument()
    expect(
      getByText(`R$${productData.price * productData.quantity}`),
    ).toBeInTheDocument()
  })

  test('should to be handles add quantity correctly', () => {
    const { getByText } = render(<ProductCardCart {...productData} />)

    // Simula clique no botão de adicionar quantidade
    fireEvent.click(getByText('+'))
    expect(addToCartFn).toHaveBeenCalledWith(
      productData.id,
      productData.name,
      productData.price,
      productData.image,
    )
  })

  test('should to be handles remove quantity correctly', () => {
    const { getByText } = render(<ProductCardCart {...productData} />)

    fireEvent.click(getByText('-'))
    expect(removeProductQuantityCartFn).toHaveBeenCalledWith(productData.id)
  })

  test('should to be handles remove product correctly', () => {
    const { getByTestId } = render(<ProductCardCart {...productData} />)

    fireEvent.click(getByTestId('button-remove-product'))
    expect(removeProductFn).toHaveBeenCalledWith(productData.id)
  })

  test('should to be disables remove quantity button when quantity is 1', () => {
    const dataWithQuantityOne = { ...productData, quantity: 1 }
    const { getByText } = render(<ProductCardCart {...dataWithQuantityOne} />)

    expect(getByText('-')).toBeDisabled()
  })
})
