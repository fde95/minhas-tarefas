import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltagem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: Todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${valor} ${complementacao}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltagem(tarefas.length)

  return (
    <>
      <S.Main>
        <S.TituloLista>Lista de Tarefas</S.TituloLista>
        <S.ContadorDeTarefas>{mensagem}</S.ContadorDeTarefas>
        <S.Grid>
          {tarefas.map((t) => (
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
