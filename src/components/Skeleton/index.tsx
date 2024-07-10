import {
  MotionSkeletonContent,
  SkeletonCart,
  SkeletonContainer,
  SkeletonFooter,
  SkeletonHeader,
  SkeletonLogo,
  SkeletonProductCard,
} from './styles'

const Skeleton = () => {
  return (
    <SkeletonContainer data-testid="skeleton-container">
      <SkeletonHeader data-testid="skeleton-header">
        <SkeletonLogo />
        <SkeletonCart />
      </SkeletonHeader>

      <MotionSkeletonContent
        animate={{
          scale: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        data-testid="skeleton-content"
      >
        {Array(8)
          .fill(0)
          .map((_, index) => {
            return (
              <SkeletonProductCard
                key={index}
                data-testid="skeleton-product-card"
              />
            )
          })}
      </MotionSkeletonContent>

      <SkeletonFooter data-testid="skeleton-footer" />
    </SkeletonContainer>
  )
}

export default Skeleton
