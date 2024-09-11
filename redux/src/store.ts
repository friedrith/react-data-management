import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const valueSlice = createSlice({
  name: 'value',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, action: { payload: string }) => {
      state.value = action.payload
    },
  },
})

export const getValue = (state: RootState) => state.value

export const { setValue } = valueSlice.actions

export const store = configureStore({
  reducer: valueSlice.reducer,
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
