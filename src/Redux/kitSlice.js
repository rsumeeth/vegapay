import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isActiveKit: true,
  searchResult: "", 
};

export const kitSlice = createSlice({
  name: 'kitModule',
  initialState,
  reducers: {
    selectedKit: (state) => {
      state.value += 1;
      state.isActiveKit = true;
      state.isActivePersonalized = false;
      state.isReissued = false;
    },
    selectedPersonalizedSale: (state) => {
      state.value -= 1;
      state.isActiveKit = false;
      state.isActivePersonalized = true;
      state.isReissued = false;
    },
    selectedReissue: (state) => {
      state.value += 1;
      state.isActiveKit = false;
      state.isActivePersonalized = false;
      state.isReissued = true;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});


export const { selectedKit, selectedPersonalizedSale, selectedReissue, setSearchResult } = kitSlice.actions;

export default kitSlice.reducer;
