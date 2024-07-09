import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const ProductCardCartContainer = styled.div`
  width: 100%;

  position: relative;

  margin-bottom: 1rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 8px;

  color: ${defaultTheme.black};
  background-color: ${defaultTheme.white};
`

export const ProductCardCartImage = styled.img`
  width: 60px;
  height: 60px;
`

export const ProductCardCartTitle = styled.span`
  display: flex;
  align-items: center;

  width: 6rem;
  height: 2rem;

  font-weight: 400;
  font-size: 0.8125rem;
  color: ${defaultTheme['gray-500']};
  line-height: 1.0625rem;
`

export const ProductCardCardQuantity = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;

  span {
    font-weight: 400;
    font-size: 0.3125rem;
    line-height: 0.38125rem;
  }
`

export const ProductCartButtonQuantity = styled.div`
  max-width: 3.8rem;
  min-width: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.2rem;

  border: solid 1px ${defaultTheme['gray-300']};
  border-radius: 1px;

  span {
    font-size: 0.5rem;
    font-weight: 400;
    line-height: 0.609375rem;
  }

  button {
    padding: 0.4rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.5rem;
    font-weight: 400;
    line-height: 0.609375rem;

    cursor: pointer;
    border: 0px;
    background-color: ${defaultTheme.white};

    &:hover {
      color: ${defaultTheme['gray-300']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export const ProductCardCartPrice = styled.span`
  max-width: 4.5rem;
  min-width: 4.5rem;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.0625rem;
`

export const ButtonProductRemove = styled.button`
  padding: 0.5rem;

  position: absolute;
  top: -10%;
  right: -5%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 999999px;
  border: 0px;

  color: ${defaultTheme.white};
  background-color: ${defaultTheme.black};
`
