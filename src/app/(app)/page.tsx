'use client'

import { motion } from 'framer-motion'

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
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              key={product.id}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                description={product.description}
                price={product.price}
                image={product.photo}
              />
            </motion.div>
          )
        })}
      </MainContainer>

      <Footer />
    </HomeContainer>
  )
}

export default Home
