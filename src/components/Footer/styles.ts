import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 2.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${defaultTheme['gray-200']};
`

export const FooterContent = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${defaultTheme.black};
`
