import { X } from 'phosphor-react'

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
} from './styles'

const ModalProductsInCart = () => {
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
          <ProductCardCart
            title="Apple Watch Series 4 GPS"
            price={399}
            image="https://s3-alpha-sig.figma.com/img/f905/4b8f/394d83c88a4eeb9bbb1d1cff1bbe5422?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gek4HdJ0PC4vwm2Hslo6wBwWQftsxVSBOeFgKCTbdkMnFyVwLzyJF2ArNSDV6gL4xQg0M1vRh74SdXjBdWUpmYclxdC13abJhM~vwNxcqSN0wg6Q7fI2NK76eSFjRjp5Za97DhB8tkAtCXfY7nsdxdjMBXf-P3IYyyVZ5M6SpXlhyqD5QzterBuVoq3NxG~MVu5Cr3Bts50AigviRN~7NmzBraBVL8Kpbpda~lvmTfEE6H~nPt2rW5HZPd3MRsHTjtUwaDSDBvtSryztpcmoX1h7wBvBYnH0R4Td-Weyghiq1rgNNMxB21RNUf031U~wxnQPQkQFEOlx2gKDU7cSXQ__"
          />
          <ProductCardCart
            title="Apple Homepod"
            price={399}
            image="https://s3-alpha-sig.figma.com/img/84ff/cbde/68b098551b52cd0b2b2740d2e168265c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umu0Yu3wyuajzpQpTo5hDpzuCOJZBu02Ml1GrAmvMZhYef1Fi-CHmgiMxLpyE1UOyalC7VNmI8f4MnKus3Rl3XIzU8yZMVSTzcD0i5Tg4cKT29o3mGVKI4DTeUENlEQyRPg2F7gwr5V~OrQlqjySs8MjVeQGxDYif~K9RlaxgqYyfzD5XaWgmbmX0qXvZrkK6-kqqmQR~ro11cZmke9jwJ1VJ-5HKMzwYKfDYiFrzEel5vOFUx-diVS0vvqNxYTDDYtV~usk-EIQgx5aYmtSBNOCFjkKFe4cOrqbGUIfRiuvedkv~FJgKZGB4q-LdN6~Wkmad72DQfaZ0HeSRF7YQQ__"
          />
        </ModalCartContent>
        <ButtonCheckout>Finalizar Compra</ButtonCheckout>
      </DialogContent>
    </DialogPortal>
  )
}

export default ModalProductsInCart
