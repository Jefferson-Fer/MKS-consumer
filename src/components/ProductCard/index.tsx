import { Bag } from 'phosphor-react'

import { useProductCart } from '@/store/CartProductContext'

import {
  ButtonAddProduct,
  ProductCardContainer,
  ProductCardContent,
  ProductCardPrice,
  ProductCardSubtitle,
  ProductCardTitle,
  ProductImage,
} from './style'

type ProductCardProps = {
  id: number
  name: string
  brand: string
  description: string
  price: number
  image: string
}

const ProductCard = ({
  id,
  name,
  brand,
  description,
  price,
  image,
}: ProductCardProps) => {
  const { AddToCart } = useProductCart()

  const handleAddProductCart = () => {
    AddToCart(id, name, price, image)
  }

  return (
    <ProductCardContainer>
      <ProductImage src={image} />

      <ProductCardContent>
        <ProductCardTitle>
          {brand} {name}
        </ProductCardTitle>

        <ProductCardPrice>R${price}</ProductCardPrice>
      </ProductCardContent>

      <ProductCardSubtitle>{description}</ProductCardSubtitle>

      <ButtonAddProduct onClick={handleAddProductCart}>
        <Bag size={14} />
        <span>COMPRAR</span>
      </ButtonAddProduct>
    </ProductCardContainer>
  )
}

export default ProductCard
