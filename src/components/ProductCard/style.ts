import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const ProductCardContainer = styled.div`
  width: 17rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  border-radius: 8px;
`

export const ProductImage = styled.img`
  height: 8.625rem;

  padding-top: 1rem;
`

export const ProductCardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 1rem;
`

export const ProductCardTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${defaultTheme['gray-500']};
`

export const ProductCardPrice = styled.span`
  padding: 0.25rem 0.5rem;

  border-radius: 8px;

  font-weight: 700;
  font-size: 0.9325rem;
  color: ${defaultTheme.white};
  background-color: ${defaultTheme['gray-400']};
`

export const ProductCardSubtitle = styled.span`
  padding: 0 1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* número de linhas que deseja exibir */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  font-size: 0.625rem;
  font-weight: 300;
  color: ${defaultTheme['gray-500']};
`

export const ButtonAddProduct = styled.button`
  width: 100%;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: 0;

  cursor: pointer;

  color: ${defaultTheme.white};
  background-color: ${defaultTheme['blue-300']};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-weight: 600;
    font-size: 14;
  }
`
