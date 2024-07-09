import { useQuery } from 'react-query'

import { getAllProducts } from '@/service/ServiceProduct'

const useAllProducts = () => {
  return useQuery(['products'], getAllProducts)
}

export { useAllProducts }
