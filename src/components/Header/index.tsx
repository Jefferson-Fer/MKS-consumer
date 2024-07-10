'use client'

import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { useProductCart } from '@/store/CartProductContext'

import Modal from '../ModalProductInCart'
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

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderTitleSubtitle>
        <Title>MKS</Title>
        <Subtitle>Sistemas</Subtitle>
      </HeaderTitleSubtitle>

      <div>
        <ButtonShoppingCart onClick={openModal} data-testid="cart-button">
          <ShoppingCart fill="black" size={18} />
          <CountItemCart>{products.length}</CountItemCart>
        </ButtonShoppingCart>
        <Modal isOpen={isOpen} onClose={closeModal} />
      </div>
    </HeaderContainer>
  )
}

export default Header
