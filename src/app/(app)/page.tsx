'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import { useAllProducts } from '@/hook/Products'

import { HomeContainer, MainContainer } from './styles'

const Home = () => {
  const { data } = useAllProducts()

  console.log(data)

  return (
    <HomeContainer>
      <Header />

      <MainContainer>
        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/f905/4b8f/394d83c88a4eeb9bbb1d1cff1bbe5422?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gek4HdJ0PC4vwm2Hslo6wBwWQftsxVSBOeFgKCTbdkMnFyVwLzyJF2ArNSDV6gL4xQg0M1vRh74SdXjBdWUpmYclxdC13abJhM~vwNxcqSN0wg6Q7fI2NK76eSFjRjp5Za97DhB8tkAtCXfY7nsdxdjMBXf-P3IYyyVZ5M6SpXlhyqD5QzterBuVoq3NxG~MVu5Cr3Bts50AigviRN~7NmzBraBVL8Kpbpda~lvmTfEE6H~nPt2rW5HZPd3MRsHTjtUwaDSDBvtSryztpcmoX1h7wBvBYnH0R4Td-Weyghiq1rgNNMxB21RNUf031U~wxnQPQkQFEOlx2gKDU7cSXQ__"
        />

        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/83a8/9022/4e0b435f883b2d87490e41f73f538cd4?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIqGIog7pQU3JMskVqOsQU7ptC957yxy6XLTYWpVgYEkbQT5efBWeaahOkbwpILLrfio1R0Lj1Gg3Xpzba6SW-azu2AhME1pZ47b2Su~WWWActU9QG9fOq9nDxIKC59XjCWSZNeqXxG89zg0eYIhL6aQlkp7MS486TwyLhwQ-pWjlNAc6Lsoko3448h48WZ4LdeOg3PE4Kn6FBtDRV5DL9jzfGCvsmReBAAhi6~BHmoc8PC4kq0Ae84pAYXIn-niCsuDsl2qRFfbWtFTEf9yck69Ril4mmE1FBqilmaxxE4MRBF5gQoSXKKJfBesls-LTihjkNsAlNt4aGg1i1L-vA__"
        />

        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/0d2b/d483/f27b8281a53d5278948ebcfcc21a8ad0?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fq8Qo5cHHiIog1F~YH8CA9b9pI2b0wq7RiTsYpJ3bY6qhWpt4nnx4I7L1MI69tEjQlSZ~8IgbPNLwDDZsRKN-dsQevDopgWCNKuVpbAgAC95HcANtwIysPHOsqsoy8U0daaaTZVtHSJGwkilJ5--E1R7pwBmRZiGzgaMiNL9-AbxEDp7QEuTx9lXpM1VLEnO07nLoU4IuEH73g8GKzRgocNFUb-HPrHVFaHGqj9ifWsyhnGDbKobijXy800FTh2cyKhyiLyNYzOEDv2KPgFvCeB9bmY6NylJ1rTSsJd6FMCz9VoHClw7GUvA-yw7OJs~lAta9inH8nq7aYDp75sj0Q__"
        />

        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/29a9/2c93/e8688c4200581f4df6bf740f50efcf6a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXlddDx9fjvTm4TTGFBx2~94byETg2~RMT4D2JwNazcpfzt1dRi4gBB8~WRswtn65zkFhKPmJFb257sb7Y4KEEf2hj7y5kaN1bZD5j9hb7nF1Kiibl20-Mw~NGI-De8r9VnZNPAO5WTcS38JVynejUZOuf7vObhQ6JwllOmzYOjHLRmXUh3D0bsm-Xebq89CixrSTmZ3SFAWHcqb1Wy4KHAhnZ8WBhv64EbQmTz9zkFi8~yV4W48yjoLzUzWWMCUP9AgHT8MbbkERLQzWGg2KzQfRfSIP1THeC4oAhdL7Y4h~BICiAm1B~EgMn1KZrCdwlDOhfwyMCQMKSQI1sFfbA__"
        />

        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/f905/4b8f/394d83c88a4eeb9bbb1d1cff1bbe5422?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gek4HdJ0PC4vwm2Hslo6wBwWQftsxVSBOeFgKCTbdkMnFyVwLzyJF2ArNSDV6gL4xQg0M1vRh74SdXjBdWUpmYclxdC13abJhM~vwNxcqSN0wg6Q7fI2NK76eSFjRjp5Za97DhB8tkAtCXfY7nsdxdjMBXf-P3IYyyVZ5M6SpXlhyqD5QzterBuVoq3NxG~MVu5Cr3Bts50AigviRN~7NmzBraBVL8Kpbpda~lvmTfEE6H~nPt2rW5HZPd3MRsHTjtUwaDSDBvtSryztpcmoX1h7wBvBYnH0R4Td-Weyghiq1rgNNMxB21RNUf031U~wxnQPQkQFEOlx2gKDU7cSXQ__"
        />

        <ProductCard
          name="Watch Series 4 GPS"
          brand="Apple"
          description="Redesigned from scratch and completely revised."
          price={399}
          image="https://s3-alpha-sig.figma.com/img/f905/4b8f/394d83c88a4eeb9bbb1d1cff1bbe5422?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gek4HdJ0PC4vwm2Hslo6wBwWQftsxVSBOeFgKCTbdkMnFyVwLzyJF2ArNSDV6gL4xQg0M1vRh74SdXjBdWUpmYclxdC13abJhM~vwNxcqSN0wg6Q7fI2NK76eSFjRjp5Za97DhB8tkAtCXfY7nsdxdjMBXf-P3IYyyVZ5M6SpXlhyqD5QzterBuVoq3NxG~MVu5Cr3Bts50AigviRN~7NmzBraBVL8Kpbpda~lvmTfEE6H~nPt2rW5HZPd3MRsHTjtUwaDSDBvtSryztpcmoX1h7wBvBYnH0R4Td-Weyghiq1rgNNMxB21RNUf031U~wxnQPQkQFEOlx2gKDU7cSXQ__"
        />
      </MainContainer>

      <Footer />
    </HomeContainer>
  )
}

export default Home
