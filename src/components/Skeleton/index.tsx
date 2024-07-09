import {
  SkeletonCart,
  SkeletonContainer,
  SkeletonContent,
  SkeletonFooter,
  SkeletonHeader,
  SkeletonLogo,
  SkeletonProductCard,
} from './styles'

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonHeader>
        <SkeletonLogo />
        <SkeletonCart />
      </SkeletonHeader>

      <SkeletonContent>
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return <SkeletonProductCard key={index} />
          })}
      </SkeletonContent>

      <SkeletonFooter />
    </SkeletonContainer>
  )
}

export default Skeleton
