import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoNewTask = styled(Link)`
  padding: 8px;
  display: inline-block;
  font-weight: bold;
  background-color: ${variaveis.verde};
  border-radius: 8px;
  text-align: center;
  color: ${variaveis.branco};
  box-shadow: 5px 5px 12px rgba(0, 200, 0, 0.2);
  text-decoration: none;
  transition: 0.6s ease;
  &:hover {
    background-color: ${variaveis.fundoVerde};
    color: ${variaveis.verde};
    box-shadow: none;
    transition: 0.2s ease;
  }
`
