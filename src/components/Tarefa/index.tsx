import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.SubTitulo>Detalhes:</S.SubTitulo>
      <S.Descricao maxLength={572} value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>
              <i className="bi bi-plus-lg" title="Salvar"></i>
            </S.BotaoSalvar>
            <S.BotaoDelete onClick={() => setEstaEditando(false)}>
              <i className="bi bi-x-lg" title="Cancelar"></i>
            </S.BotaoDelete>
          </>
        ) : (
          <>
            <S.BotaoEdit onClick={() => setEstaEditando(true)}>
              <i className="bi bi-pencil-fill" title="Editar"></i>
            </S.BotaoEdit>
            <S.BotaoDelete>
              <i className="bi bi-trash3-fill" title="Deletar"></i>
            </S.BotaoDelete>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
