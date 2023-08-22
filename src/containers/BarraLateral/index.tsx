import { useDispatch, useSelector } from 'react-redux'
import {
  FiltroCardPendente,
  FiltroCardConcluido,
  FiltroCardUrgente,
  FiltroCardTodas
} from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Icon className="bi bi-search"></S.Icon>
        <S.Campo
          type="text"
          placeholder="Buscar..."
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCardPendente legenda="Pendentes" contador={12} />
          <FiltroCardConcluido legenda="Concluidas" contador={12} />
          <FiltroCardUrgente legenda="Urgente" contador={10} />
          <FiltroCardTodas legenda="Todas" contador={60} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
