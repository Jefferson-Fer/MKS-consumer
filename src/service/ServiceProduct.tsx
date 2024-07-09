import axios from 'axios'

import { ProductDTO } from '@/dtos/ProductDTO'

type ResponseProps = {
  products: ProductDTO[]
  count: number
}

const api = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
})

export const getAllProducts = async () => {
  try {
    const { data } = await api.get(`/products`, {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'ASC',
      },
    })

    const response: ResponseProps = data

    return response.products
  } catch (error) {
    console.log(error)
  }
}
