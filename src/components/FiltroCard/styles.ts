import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const CardPendente = styled.div<PropsSemLegendaEContador>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 240px;
  height: 50px;
  background-color: #242831;
  border-radius: 8px;
  text-align: center;
  margin: 16px 0;
  border: 2px solid ${(props) => (props.ativo ? '#be7620' : '#242831')};
  transition: 0.5s ease;
`
export const CardConcluido = styled.div<PropsSemLegendaEContador>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 240px;
  height: 50px;
  background-color: #242831;
  border-radius: 8px;
  text-align: center;
  margin: 16px 0;
  border: 2px solid ${(props) => (props.ativo ? '#09c435' : '#242831')};
  transition: 0.5s ease;
`
export const CardUrgente = styled.div<PropsSemLegendaEContador>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 240px;
  height: 50px;
  background-color: #242831;
  border-radius: 8px;
  text-align: center;
  margin: 16px 0;
  border: 2px solid ${(props) => (props.ativo ? '#BE2020' : '#242831')};
  transition: 0.5s ease;
`
export const CardTodas = styled.div<PropsSemLegendaEContador>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  width: 240px;
  height: 50px;
  background-color: #242831;
  border-radius: 8px;
  text-align: center;
  margin: 16px 0;
  border: 2px solid ${(props) => (props.ativo ? '#1ad0ff' : '#242831')};
  transition: 0.5s ease;
`
export const ContadorPendentes = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: #3f3225;
  color: #be7620;
`
export const ContadorConcluidos = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: #1e4632;
  color: #09c435;
`
export const ContadorUrgente = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: #471717;
  color: #be2020;
`
export const ContadorTodas = styled.span`
  padding: 2px 6px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 42px;
  background-color: #21475a;
  color: #1ad0ff;
`
export const Label = styled.span`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
`
