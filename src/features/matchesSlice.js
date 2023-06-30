import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

import imgMatch from '../images/match.png'

function moveOfFirstPlayerEven(ostacha) {
  switch(ostacha) {
    case 1:
    case 4: 
    case 6: 
      return 1;
    case 2:
    case 5: 
      return 2;
    case 7: 
    case 3:
    case 0:
      return 3;
  }  
}

function moveOfFirstPlayerOdd(ostacha) {
  switch(ostacha) {
    case 1:
    case 2: 
    case 5: 
    case 6:
    case 0: 
      return 1;
    case 7: 
      return 2;
    case 3:
    case 4:
      return 3;
  }  
}

const matchesSlice = createSlice({
  name: 'matches',
  initialState: {
    matchList: [],
    secondPlayerList: [],
    firstPlayerList: [],
    isModeSelected: false,
    isAiPlayFirst: false
  },
  reducers: {
    startMatch:(state) => {
      selectMode()
        const item ={
            img: imgMatch,
            isSelected: false
        }

        state.isModeSelected = true

        state.matchList = [];
        state.secondPlayerList = [];
        state.firstPlayerList = []

        for(let i=1; i<=25; i++) {
            state.matchList.push({...item, id: nanoid()})
        }
    },

    removeSelectedItems: (state, {payload}) => {
      const selectedItems = state.matchList.splice(-payload)
      state.secondPlayerList.push(...selectedItems)

      const ostacha = state.matchList.length%8;
      
      if(state.firstPlayerList.length%2 == 0) {
        const n = moveOfFirstPlayerEven(ostacha);
        const t = state.matchList.splice(-n);
        state.firstPlayerList.push(...t);
      } else {
        const a = moveOfFirstPlayerOdd(ostacha);
        const e = state.matchList.splice(-a)
        state.firstPlayerList.push(...e)
      }
    },

    selectMode: (state, {payload}) => {
      state.isModeSelected = false
      if(payload.isAiPlayFirst) {
        const randomNum = Math.floor(Math.random() * 3) + 1
        const t = state.matchList.splice(-randomNum);
        state.firstPlayerList.push(...t);
      }
    }
  },
});

export const { startMatch, removeSelectedItems, selectMode } = matchesSlice.actions;
export default matchesSlice.reducer;