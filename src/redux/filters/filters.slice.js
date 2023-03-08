import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setNameFilterAction(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilterAction } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
