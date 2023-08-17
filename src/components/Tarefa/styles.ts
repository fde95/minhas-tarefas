import styled from 'styled-components'

export const Card = styled.div`
  background-color: #1a1e27;
  padding: 16px;
  margin: 32px 16px;
  width: 430px;
  border-radius: 8px;
`

export const Titulo = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const SubTitulo = styled.h4`
  margin-top: 32px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.textarea`
  margin-top: 8px;
  color: #55585f;
  font-size: 14px;
  display: block;
  width: 100%;
  height: 210px;
  background-color: transparent;
  border: transparent;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  resize: none;
  &:focus-visible {
    color: #ffffff;
  }
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #be2020;
  background-color: #471717;
  margin-right: 16px;
  border-radius: 4px;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  text-align: end;
`

export const BotaoEdit = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  color: #9c9c9e;
  background-color: #242831;
  opacity: 40%;
  margin-right: 8px;
  border-radius: 8px;
  transition: 0.3s ease;
  &:hover {
    opacity: 100%;
  }
`
export const BotaoDelete = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  color: #be2020;
  opacity: 40%;
  background-color: #471717;
  margin-right: 8px;
  border-radius: 8px;
  transition: 0.3s ease;
  &:hover {
    opacity: 100%;
  }
`
