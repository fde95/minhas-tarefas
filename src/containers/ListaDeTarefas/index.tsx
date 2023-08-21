import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'ver a aula 3 EBAC',
    prioridade: 'Urgente',
    status: 'Pendente'
  },
  {
    titulo: 'Estudar JavaScript',
    descricao: 'ver a aula 2 EBAC',
    prioridade: 'Normal',
    status: 'Concluido'
  },
  {
    titulo: 'Estudar React',
    descricao: 'ver a aula 8 EBAC',
    prioridade: 'Urgente',
    status: 'Pendente'
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
