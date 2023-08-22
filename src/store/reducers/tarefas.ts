import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript refazendo o exercício do módulo 7 ',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar TypeScript refazendo o exercício do módulo 12 ',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar TypeScript'
    },
    {
      id: 3,
      descricao: 'Estudar React do módulo 25 ',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Estudar React'
    },
    {
      id: 4,
      descricao: 'Estudar ESLint e ler documentação ',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDO,
      titulo: 'Estudar ESLint'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
