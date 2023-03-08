export const FilterActions = {
  SET_NAME: 'filters/setNameFilter',
};

export const setNameFilterAction = name => ({
  type: FilterActions.SET_NAME,
  payload: { name },
});
