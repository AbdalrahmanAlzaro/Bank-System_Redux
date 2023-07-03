import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAccount, deleteAccount } from './store';

const Main = () => {
  const accounts = useSelector(state => state.accounts);
  const numberOfAccounts = useSelector(state => state.numberOfAccounts); // Get numberOfAccounts from the state
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    customerName: '',
    accountNumber: '',
    accountType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddAccount = (e) => {
    e.preventDefault();
    const newAccount = {
      id: Date.now(),
      customerName: formData.customerName,
      accountNumber: formData.accountNumber,
      accountType: formData.accountType
    };
    dispatch(addAccount(newAccount));
    setFormData({
      customerName: '',
      accountNumber: '',
      accountType: ''
    });
  };

  const handleDeleteAccount = (accountId) => {
    dispatch(deleteAccount(accountId));
  };

  return (
    <main className="p-4">
<p className="text-center text-2xl">Number of Accounts: {numberOfAccounts}</p>
    <table className="w-full border-collapse mb-4">
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
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  
    <form onSubmit={handleAddAccount} className="mb-4">
      <div className="flex flex-col mb-4">
        <label htmlFor="customerName" className="text-lg font-medium mb-2">
          Customer Name
        </label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="border-gray-300 border rounded py-2 px-4"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="accountNumber" className="text-lg font-medium mb-2">
          Account Number
        </label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="border-gray-300 border rounded py-2 px-4"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="accountType" className="text-lg font-medium mb-2">
          Account Type
        </label>
        <input
          type="text"
          id="accountType"
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          className="border-gray-300 border rounded py-2 px-4"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Add Account
      </button>
    </form>
  </main>
  
  );
};

export default Main;
