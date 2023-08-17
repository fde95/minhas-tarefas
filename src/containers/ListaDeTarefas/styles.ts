import styled from 'styled-components'

export const Main = styled.main`
  background-color: #15181f;
  height: 95vh;
  overflow-y: scroll;
`

export const TituloLista = styled.h2`
  font-size: 32px;
  color: #ffffff;
  margin: 30px 0 0 50px;
  @media (max-width: 767px) {
    margin: 30px 0 0 20px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    margin: 30px 0 0 24px;
  }
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 767px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`
