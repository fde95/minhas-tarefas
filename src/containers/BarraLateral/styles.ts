import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.fundoBarraLateral};
  height: 100vh;
  border-right: 3px solid ${variaveis.fundoCardBarraLateral};
`
export const Filtros = styled.div`
  display: block;
  margin-top: 16px;
`
export const Campo = styled.input`
  border: none;
  margin-left: 16px;
  color: ${variaveis.textoSecundario};
  background-color: transparent;
  font-size: 20px;
  &:focus-visible {
    outline: none;
    color: ${variaveis.branco};
  }
`
export const Icon = styled.i`
  color: ${variaveis.textoSecundario};
`
