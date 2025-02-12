import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroReducers from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
