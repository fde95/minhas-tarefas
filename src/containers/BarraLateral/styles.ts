import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #1a1e27;
  height: 100vh;
  border-right: 3px solid #242831;
`
export const Filtros = styled.div`
  display: block;
  margin-top: 16px;
`
export const Campo = styled.input`
  border: none;
  margin-left: 16px;
  color: #55585f;
  background-color: transparent;
  font-size: 20px;
  &:focus-visible {
    outline: none;
    color: #ffffff;
  }
`
export const Icon = styled.i`
  color: #55585f;
`
