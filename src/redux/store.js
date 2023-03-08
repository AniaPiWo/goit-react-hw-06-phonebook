import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filters/filters.reducer';

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
  }),
  devToolsEnhancer()
);
