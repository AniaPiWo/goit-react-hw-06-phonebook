import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setNameFilterAction: {
      reducer: (state, action) => {
        const { name } = action.payload;
        return { name };
      },
      prepare(name) {
        return {
          payload: { name },
        };
      },
    },
  },
});

const setNameFilterAction = filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;

export { setNameFilterAction, filtersReducer };
