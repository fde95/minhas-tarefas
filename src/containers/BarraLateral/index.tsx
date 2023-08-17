import {
  FiltroCardPendente,
  FiltroCardConcluido,
  FiltroCardUrgente,
  FiltroCardTodas
} from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Icon className="bi bi-search"></S.Icon>
      <S.Campo type="text" placeholder="Buscar..." />
      <S.Filtros>
        <FiltroCardPendente legenda="Pendentes" contador={12} />
        <FiltroCardConcluido legenda="Concluidas" contador={12} />
        <FiltroCardUrgente legenda="Urgente" contador={10} />
        <FiltroCardTodas legenda="Todas" contador={60} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
