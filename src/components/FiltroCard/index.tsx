import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

export const FiltroCardPendente = ({ ativo, contador, legenda }: Props) => (
  <>
    <S.CardPendente ativo={ativo}>
      <S.Label>{legenda}</S.Label>
      <S.ContadorPendentes>{contador}</S.ContadorPendentes>
    </S.CardPendente>
  </>
)

export const FiltroCardConcluido = ({ ativo, contador, legenda }: Props) => (
  <>
    <S.CardConcluido ativo={ativo}>
      <S.Label>{legenda}</S.Label>
      <S.ContadorConcluidos>{contador}</S.ContadorConcluidos>
    </S.CardConcluido>
  </>
)

export const FiltroCardUrgente = ({ ativo, contador, legenda }: Props) => (
  <>
    <S.CardUrgente ativo={ativo}>
      <S.Label>{legenda}</S.Label>
      <S.ContadorUrgente>{contador}</S.ContadorUrgente>
    </S.CardUrgente>
  </>
)

export const FiltroCardTodas = ({ ativo, contador, legenda }: Props) => (
  <>
    <S.CardTodas ativo={ativo}>
      <S.Label>{legenda}</S.Label>
      <S.ContadorTodas>{contador}</S.ContadorTodas>
    </S.CardTodas>
  </>
)
