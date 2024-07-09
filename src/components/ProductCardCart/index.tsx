import { X } from 'phosphor-react'

import { useProductCart } from '@/store/CartProductContext'

import {
  ButtonProductRemove,
  ProductCardCardQuantity,
  ProductCardCartContainer,
  ProductCardCartImage,
  ProductCardCartPrice,
  ProductCardCartTitle,
  ProductCartButtonQuantity,
} from './styles'

type ProductsCardCartProps = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

const ProductCardCart = ({
  id,
  name,
  price,
  image,
  quantity,
}: ProductsCardCartProps) => {
  const { AddToCart, RemoveProductQuantityCart, RemoveProduct } =
    useProductCart()

  const handleAddQuantityProduct = () => {
    AddToCart(id, name, price, image)
  }

  const handleRemoveQuantityProduct = () => {
    if (quantity > 1) {
      RemoveProductQuantityCart(id)
    }
  }

  const handleRemoveProductCart = () => {
    RemoveProduct(id)
  }

  return (
    <ProductCardCartContainer>
      <ProductCardCartImage src={image} />
      <ProductCardCartTitle>{name}</ProductCardCartTitle>
      <ProductCardCardQuantity>
        <span>Qtd:</span>
        <ProductCartButtonQuantity>
          <button
            onClick={handleRemoveQuantityProduct}
            disabled={quantity === 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={handleAddQuantityProduct}>+</button>
        </ProductCartButtonQuantity>
      </ProductCardCardQuantity>
      <ProductCardCartPrice>R${price * quantity}</ProductCardCartPrice>
      <ButtonProductRemove onClick={handleRemoveProductCart}>
        <X size={14} />
      </ButtonProductRemove>
    </ProductCardCartContainer>
  )
}

export default ProductCardCart
