import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  prioridade?: string
  status?: string
}

function returnaCorDeTexto(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'Pendente') return variaveis.laranja
    if (props.status === 'Concluido') return variaveis.verde
    return '#ccc'
  } else if ('prioridade' in props) {
    if (props.prioridade === 'Urgente') return variaveis.vermelho
    if (props.prioridade === 'Normal') return variaveis.azul
  }
  return '#ccc'
}
function returnaCorDeFundo(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'Pendente') return variaveis.fundoLaranja
    if (props.status === 'Concluido') return variaveis.fundoVerde
    return '#ccc'
  } else if ('prioridade' in props) {
    if (props.prioridade === 'Urgente') return variaveis.fundoVermelho
    if (props.prioridade === 'Normal') return variaveis.fundoAzul
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: ${variaveis.fundoBarraLateral};
  padding: 16px;
  margin: 32px 16px;
  width: 430px;
  border-radius: 8px;
`

export const Titulo = styled.h3`
  color: ${variaveis.branco};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const SubTitulo = styled.h4`
  margin-top: 32px;
  color: ${variaveis.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Descricao = styled.textarea`
  margin-top: 8px;
  color: ${variaveis.textoSecundario};
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
    color: ${variaveis.branco};
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  margin-right: 16px;
  border-radius: 4px;
  color: ${(props) => returnaCorDeTexto(props)};
  background-color: ${(props) => returnaCorDeFundo(props)};
`

export const TagUrgente = styled(Tag)`
  color: ${variaveis.vermelho};
  background-color: ${variaveis.fundoVermelho};
`
export const TagPendente = styled(Tag)`
  color: ${variaveis.laranja};
  background-color: ${variaveis.fundoLaranja};
`
export const TagConcluido = styled(Tag)`
  color: ${variaveis.verde};
  background-color: ${variaveis.fundoVerde};
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  text-align: end;
`

export const Botao = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  opacity: 40%;
  margin-right: 8px;
  border-radius: 8px;
  transition: 0.3s ease;
  &:hover {
    opacity: 100%;
  }
`

export const BotaoEdit = styled(Botao)`
  color: ${variaveis.cinza};
  background-color: ${variaveis.fundoCinza};
`
export const BotaoDelete = styled(Botao)`
  color: ${variaveis.vermelho};
  background-color: ${variaveis.fundoVermelho};
`
export const BotaoSalvar = styled(Botao)`
  color: ${variaveis.verde};
  background-color: ${variaveis.fundoVerde};
`
