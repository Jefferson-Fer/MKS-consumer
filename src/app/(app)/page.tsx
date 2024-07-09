'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import Skeleton from '@/components/Skeleton'
import { useAllProducts } from '@/hook/Products'

import { HomeContainer, MainContainer } from './styles'

const Home = () => {
  const { data, isLoading } = useAllProducts()

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        {data?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={product.description}
              price={product.price}
              image={product.photo}
            />
          )
        })}
      </MainContainer>

      <Footer />
    </HomeContainer>
  )
}

export default Home
