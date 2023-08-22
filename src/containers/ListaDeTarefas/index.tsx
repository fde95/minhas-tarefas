import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <>
      <S.Main>
        <S.TituloLista>Lista de Tarefas</S.TituloLista>
        <S.Grid>
          {itens.map((t) => (
            <li key={t.titulo}>
              <Tarefa
                id={t.id}
                descricao={t.descricao}
                prioridade={t.prioridade}
                status={t.status}
                titulo={t.titulo}
              />
            </li>
          ))}
        </S.Grid>
      </S.Main>
    </>
  )
}

export default ListaTarefas
