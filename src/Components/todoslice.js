import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  chosen: '',
  housepicked: '',
  num: 0
}

//var ran 

export const todoSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    chooserock : (state) => {
      state.chosen = 'rock'
    },
    choosepaper : (state) => {
      state.chosen = 'paper'
    },
    choosescissors : (state) => {
      state.chosen = 'scissors'
    },
    setnum : (state) => {
        state.num = Math.floor(Math.random() * 3 + 1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { choosescissors, choosepaper, chooserock, setnum } = todoSlice.actions

export default todoSlice.reducer