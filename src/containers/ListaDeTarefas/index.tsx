import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <>
      <S.Main>
        <S.TituloLista>Lista de Tarefas</S.TituloLista>
        <S.Grid>
          {filtraTarefas().map((t) => (
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
