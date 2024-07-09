import { create } from 'zustand'

export interface CartProductType {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProductContextType {
  products: CartProductType[]
  AddToCart: (id: number, name: string, price: number, image: string) => void
  RemoveProductQuantityCart: (removeIdQuantity: number) => void
  RemoveProduct: (removeId: number) => void
}

export const useProductCart = create<CartProductContextType>((set) => ({
  products: [],

  AddToCart: (id: number, name: string, price: number, image: string) =>
    set((state) => ({
      products: state.products.some((product) => product.id === id)
        ? state.products.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : { ...item },
          )
        : [...state.products, { id, name, price, image, quantity: 1 }],
    })),
  RemoveProductQuantityCart: (removeIdQuantity: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === removeIdQuantity
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    })),
  RemoveProduct: (removeId: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== removeId),
    })),
}))
