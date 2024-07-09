import { Bag } from 'phosphor-react'

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
  name: string
  brand: string
  description: string
  price: number
  image: string
}

const ProductCard = ({
  name,
  brand,
  description,
  price,
  image,
}: ProductCardProps) => {
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

      <ButtonAddProduct>
        <Bag size={14} />
        <span>COMPRAR</span>
      </ButtonAddProduct>
    </ProductCardContainer>
  )
}

export default ProductCard
