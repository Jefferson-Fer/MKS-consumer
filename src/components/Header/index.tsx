'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart } from 'phosphor-react'

import { useProductCart } from '@/store/CartProductContext'

import ModalProductsInCart from '../ModalProductsInCart'
import {
  ButtonShoppingCart,
  CountItemCart,
  HeaderContainer,
  HeaderTitleSubtitle,
  Subtitle,
  Title,
} from './styles'

const Header = () => {
  const { products } = useProductCart()

  return (
    <HeaderContainer>
      <HeaderTitleSubtitle>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </HeaderTitleSubtitle>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonShoppingCart>
            <ShoppingCart fill="black" size={18} />
            <CountItemCart>{products.length}</CountItemCart>
          </ButtonShoppingCart>
        </Dialog.Trigger>

        <ModalProductsInCart />
      </Dialog.Root>
    </HeaderContainer>
  )
}

export default Header
