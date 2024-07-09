import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const SkeletonContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SkeletonHeader = styled.header`
  width: 100%;
  height: 100px;

  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${defaultTheme['blue-300']};
`

export const SkeletonLogo = styled.div`
  width: 12rem;
  height: 2rem;

  border-radius: 8px;
`

export const SkeletonCart = styled.div`
  width: 5.6rem;
  height: 2.8rem;

  border-radius: 8px;

  background-color: ${defaultTheme['gray-200']};
`

export const SkeletonContent = styled.main`
  flex: 1;

  padding: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1rem;
`

export const SkeletonProductCard = styled.div`
  width: 17rem;
  height: 20rem;

  border-radius: 8px;

  background-color: ${defaultTheme['gray-200']};
`

export const SkeletonFooter = styled.div`
  width: 100%;
  height: 2.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${defaultTheme['gray-200']};
`
