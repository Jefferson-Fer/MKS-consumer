import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { useProductCart } from '@/store/CartProductContext'

import ProductCardCart from '../ProductCardCart'
import {
  ButtonCheckout,
  ButtonCloseModal,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  ModalCartContent,
  ModalCartHeader,
  ProductCartTotalCheckout,
} from './styles'

const ModalProductsInCart = () => {
  const [count, setCount] = useState(0)
  const { products } = useProductCart()

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
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <ModalCartContent>
          <ModalCartHeader>
            <DialogTitle>
              <p>Carrinho</p> de compras
            </DialogTitle>
            <DialogClose asChild>
              <ButtonCloseModal>
                <X size={28} />
              </ButtonCloseModal>
            </DialogClose>
          </ModalCartHeader>
          {products.map((product) => {
            return (
              <ProductCardCart
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                image={product.image}
              />
            )
          })}
        </ModalCartContent>
        <ProductCartTotalCheckout>
          <span>Total: </span>
          <span>{count}</span>
        </ProductCartTotalCheckout>
        <ButtonCheckout>Finalizar Compra</ButtonCheckout>
      </DialogContent>
    </DialogPortal>
  )
}

export default ModalProductsInCart
