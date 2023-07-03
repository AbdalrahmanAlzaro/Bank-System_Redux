// src/store.js
import { createStore } from 'redux';

// Define action types
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

// Define action creators
export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  payload: account
});

export const deleteAccount = (accountId) => ({
  type: DELETE_ACCOUNT,
  payload: accountId
});

// Define initial state
const initialState = {
  accounts: [
    {
      id: 1,
      customerName: 'Israa Othman',
      accountNumber: '123456',
      accountType: 'Savings'
    },
    {
      id: 2,
      customerName: 'Ahmad Zahran',
      accountNumber: '987654',
      accountType: 'Student accounts'
    }
  ],
  numberOfAccounts: 2 // Added numberOfAccounts to the initial state
};

// Define the reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        numberOfAccounts: state.numberOfAccounts + 1 // Increment numberOfAccounts when adding a new account
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accounts: state.accounts.filter(account => account.id !== action.payload)
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
