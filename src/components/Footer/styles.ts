import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Footer = styled.footer`
  display: flex;
  position: fixed;
  top: 95vh;
  left: 15.5%;
  color: #ffffff;
  background-color: #09c435;
  width: 1622px;
  height: 50px;
  padding-top: 15px;
  justify-content: space-between;
  padding-left: 24px;
  @media (min-width: 768px) and (max-width: 1280px) {
    padding-top: 6px;
    top: 95vh;
    left: 23.4%;
    width: 981px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
`

export const Social = styled.ul`
  display: flex;
  margin-right: 16px;
`
export const SocialItem = styled.a`
  margin: 0 8px;
  color: ${variaveis.verde};
  font-size: 18px;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: ${variaveis.branco};
  opacity: 50%;
  transition: 0.8s ease;
  &:hover {
    opacity: 100%;
    transition: 0.5s ease;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    font-size: 16px;
    padding: 2px 6px;
  }
`
