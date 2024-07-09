import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const DialogPortal = styled(Dialog.Portal)``

export const DialogOverlay = styled(Dialog.Overlay)`
  position: absolute;
  right: 0;
`

export const DialogContent = styled(Dialog.Content)`
  width: 30.375rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  top: 0%;
  right: 0%;

  background-color: ${defaultTheme['blue-300']};
  color: ${defaultTheme.white};
`

export const ModalCartContent = styled.div`
  flex: 1;
  padding: 2rem 3rem;
`

export const ModalCartHeader = styled.header`
  padding-bottom: 3rem;

  display: flex;
  align-items: center;
`

export const DialogTitle = styled(Dialog.Title)`
  font: 1.6825rem;
  font-weight: 700;
`

export const DialogClose = styled(Dialog.Close)``

export const ButtonCloseModal = styled.button`
  padding: 0.5rem;

  position: fixed;
  right: 1%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 999999px;
  border: 0px;

  color: ${defaultTheme.white};
  background-color: ${defaultTheme.black};
`
export const ProductCartTotalCheckout = styled.div`
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 0.9375rem;
    color: ${defaultTheme.white};
  }
`

export const ButtonCheckout = styled.button`
  margin-top: 1rem;

  width: 100%;

  padding: 1rem;

  justify-content: center;

  border: 0px;

  cursor: pointer;

  font-size: 1.75rem;
  font-weight: 700;

  color: ${defaultTheme.white};
  background-color: ${defaultTheme.black};

  &:hover {
    opacity: 0.9;
  }
`
