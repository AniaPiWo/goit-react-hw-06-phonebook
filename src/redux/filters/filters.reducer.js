import { FilterActions } from './filters.actions';

const initialFilterState = {
  name: '',
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case FilterActions.SET_NAME: {
      const name = action.payload;
      return { name };
    }
    default:
      return state;
  }
};
