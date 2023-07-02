import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount, deleteAccount } from './store';

function Main() {
  const accounts = useSelector(state => state.accounts);
  const dispatch = useDispatch();

  const handleAddAccount = () => {
    const newAccount = {
      id: Math.floor(Math.random() * 1000) + 1,
      customerName: 'New Customer',
      accountNumber: 'New Account Number',
      accountType: 'New Account Type'
    };
    dispatch(addAccount(newAccount));
  };

  const handleDeleteAccount = (accountId) => {
    dispatch(deleteAccount(accountId));
  };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Bank App</h1>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Customer Name</th>
          <th className="py-2 px-4 border-b">Account Number</th>
          <th className="py-2 px-4 border-b">Account Type</th>
          <th className="py-2 px-4 border-b"></th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <tr key={account.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{account.id}</td>
            <td className="py-2 px-4 border-b">{account.customerName}</td>
            <td className="py-2 px-4 border-b">{account.accountNumber}</td>
            <td className="py-2 px-4 border-b">{account.accountType}</td>
            <td className="py-2 px-4 border-b">
              <button
                onClick={() => handleDeleteAccount(account.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={handleAddAccount}
      className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
    >
      Add Account
    </button>
  </div>
  
  );
}

export default Main;
