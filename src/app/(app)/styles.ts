import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContainer = styled.main`
  flex: 1;

  padding: 3rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1rem;
`
