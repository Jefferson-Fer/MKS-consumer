import { motion } from 'framer-motion'
import styled from 'styled-components'

import { defaultTheme } from '@/styles/theme/default'

export const ModalContainer = styled(motion.div)`
  width: 30rem;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`

export const ModalContent = styled(motion.div)`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: '0px 4px 8px rgba(0, 0, 0, 0.5)';

  color: ${defaultTheme.white};
  background-color: ${defaultTheme['blue-300']};
`

export const ModalContentInfo = styled.div`
  flex: 1;

  padding: 2rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModalTitle = styled.h2`
  font: 1.6825rem;
  font-weight: 700;
`

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

export const ListProductsCart = styled.div`
  flex: 1;

  margin: 3rem 0rem;

  list-style-type: none;
  padding: 0;
`

export const ProductCartTotalCheckout = styled.div`
  width: 100%;

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
