import * as S from './styles'

const Tarefa = () => (
  <>
    <S.Card>
      <S.Titulo>Tarefa 1</S.Titulo>
      <S.Tag>Urgente</S.Tag>
      <S.Tag>Pendente</S.Tag>
      <S.SubTitulo>Detalhes:</S.SubTitulo>
      <S.Descricao maxLength={572} />
      <S.BarraAcoes>
        <S.BotaoEdit>
          <i className="bi bi-pencil-fill" title="Editar"></i>
        </S.BotaoEdit>
        <S.BotaoDelete>
          <i className="bi bi-trash3-fill" title="Deletar"></i>
        </S.BotaoDelete>
      </S.BarraAcoes>
    </S.Card>
  </>
)

export default Tarefa
