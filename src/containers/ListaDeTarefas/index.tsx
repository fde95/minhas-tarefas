import Tarefa from '../../components/Tarefa'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Assistir a aula 3 EBAC',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar JavaScript',
    descricao: 'Assistir a aula 2 EBAC',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDO
  },
  {
    titulo: 'Estudar React',
    descricao: 'Assistir a aula 8 EBAC',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaTarefas = () => (
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

export default ListaTarefas
