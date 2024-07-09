import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5rem;

  background-color: ${defaultTheme['blue-300']};
`
export const HeaderTitleSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${defaultTheme.white};
`

export const Subtitle = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${defaultTheme.white};
`

export const ButtonShoppingCart = styled.button`
  width: 90px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 8px;
  border: 0px;

  background-color: ${defaultTheme.white};
  color: ${defaultTheme.black};

  cursor: pointer;

  &:hover {
    background-color: ${defaultTheme['gray-200']};
  }
`

export const CountItemCart = styled.span`
  font-size: 18;
  font-weight: 700;
  color: ${defaultTheme.black};
`
