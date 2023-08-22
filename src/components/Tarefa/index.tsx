import { remover } from '../../store/reducers/tarefas'
import { useDispatch } from 'react-redux'

import { useState } from 'react'
import * as S from './styles'

import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
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
            <S.BotaoDelete onClick={() => dispatch(remover(id))}>
              <i className="bi bi-trash3-fill" title="Deletar"></i>
            </S.BotaoDelete>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
