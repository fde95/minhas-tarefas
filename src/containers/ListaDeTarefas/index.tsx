import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const ListaTarefas = () => (
  <>
    <S.Main>
      <S.TituloLista>Lista de Tarefas</S.TituloLista>
      <S.Grid>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </S.Grid>
    </S.Main>
  </>
)

export default ListaTarefas
