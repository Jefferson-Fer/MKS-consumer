import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import ProductCard from '../../components/ProductCard'

const addToCartFn = jest.fn()

jest.mock('../../store/CartProductContext', () => ({
  useProductCart: () => ({
    AddToCart: addToCartFn,
  }),
}))

const productData = {
  id: 1,
  name: 'Name',
  brand: 'Brand',
  description: 'Description',
  price: 1,
  image: 'image.jpg',
}

describe('ProductCard component', () => {
  test('renders correctly', () => {
    const { getByText, getByRole } = render(<ProductCard {...productData} />)

    expect(
      getByText(`${productData.brand} ${productData.name}`),
    ).toBeInTheDocument()
    expect(getByText(`R$${productData.price}`)).toBeInTheDocument()
    expect(getByText(productData.description)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', productData.image)
    expect(getByText('COMPRAR')).toBeInTheDocument()
  })

  test('should to be handles add product to cart correctly', () => {
    const { getByText } = render(<ProductCard {...productData} />)

    fireEvent.click(getByText('COMPRAR'))
    expect(addToCartFn).toHaveBeenCalledWith(
      productData.id,
      productData.name,
      productData.price,
      productData.image,
    )
  })
})
