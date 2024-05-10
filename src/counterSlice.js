import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    value1: 0,
    value2: 0,
    value3: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState : INITIAL_STATE,
    reducers: {
      increment: (state, payload) => {
        state.value += 1
      },
      decrement: (state, payload) => {
        state.value -= 1
      },
    },
  })


  export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer