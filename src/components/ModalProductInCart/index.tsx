import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

import { useProductCart } from '@/store/CartProductContext'

import ProductCardCart from '../ProductCardCart'
import {
  ButtonCheckout,
  ButtonCloseModal,
  ListProductsCart,
  ModalContainer,
  ModalContent,
  ModalContentInfo,
  ModalHeader,
  ModalTitle,
  ProductCartTotalCheckout,
} from './styles'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [count, setCount] = useState(0)
  const { products } = useProductCart()

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const CountTotalCheckout = () => {
    setCount(0)
    if (products) {
      for (const product of products) {
        setCount((state) => state + product.price * product.quantity)
      }
    } else {
      setCount(0)
    }
  }

  useEffect(() => {
    CountTotalCheckout()
  }, [products])

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContent
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ModalContentInfo>
              <ModalHeader>
                <ModalTitle>
                  Carrinho
                  <br /> de compras
                </ModalTitle>
                <ButtonCloseModal onClick={onClose} data-testid="button-close">
                  <X size={28} />
                </ButtonCloseModal>
              </ModalHeader>

              <ListProductsCart>
                {products.map((product, index) => {
                  return (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        marginBottom: 10,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: 'gray',
                      }}
                      data-testid="cart-item"
                    >
                      <ProductCardCart
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.image}
                      />
                    </motion.li>
                  )
                })}
              </ListProductsCart>

              <ProductCartTotalCheckout>
                <span>Total: </span>
                <span data-testid="cart-amount">{count}</span>
              </ProductCartTotalCheckout>
            </ModalContentInfo>
            <ButtonCheckout>Finalizar Compra</ButtonCheckout>
          </ModalContent>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}

export default Modal
