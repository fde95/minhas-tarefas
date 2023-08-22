import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <>
      <S.Main>
        <S.TituloLista>Lista de Tarefas</S.TituloLista>
        <S.Grid>
          {tarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefa
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
