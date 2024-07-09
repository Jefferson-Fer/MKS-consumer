import { useState } from 'react'

import {
  ProductCardCardQuantity,
  ProductCardCartContainer,
  ProductCardCartImage,
  ProductCardCartPrice,
  ProductCardCartTitle,
  ProductCartButtonQuantity,
} from './styles'

type ProductsCardCartProps = {
  title: string
  price: number
  image: string
}

const ProductCardCart = ({ title, price, image }: ProductsCardCartProps) => {
  const [countProducts, setCountProducts] = useState(1)

  const handleAddQuantityProduct = () => {
    setCountProducts((state) => state + 1)
  }

  const handleRemoveQuantityProduct = () => {
    if (countProducts > 0) {
      setCountProducts((state) => state - 1)
    }
  }

  return (
    <ProductCardCartContainer>
      <ProductCardCartImage src={image} />
      <ProductCardCartTitle>{title}</ProductCardCartTitle>
      <ProductCardCardQuantity>
        <span>Qtd:</span>
        <ProductCartButtonQuantity>
          <button onClick={handleRemoveQuantityProduct}>-</button>
          <span>{countProducts < 0 ? '0' : countProducts}</span>
          <button onClick={handleAddQuantityProduct}>+</button>
        </ProductCartButtonQuantity>
      </ProductCardCardQuantity>
      <ProductCardCartPrice>R${price}</ProductCardCartPrice>
    </ProductCardCartContainer>
  )
}

export default ProductCardCart
