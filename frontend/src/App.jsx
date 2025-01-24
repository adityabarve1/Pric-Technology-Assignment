// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/users');  // Point to backend API
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await fetch('http://localhost:9000/api/users', {  // Point to backend API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success('User added successfully!');
        fetchUsers();
      } else {
        toast.error('Failed to add user');
      }
    } catch (error) {
      toast.error('Error adding user');
      console.error('Error adding user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl text-center font-bold mb-8">User Management</h1>
      <UserForm onSave={addUser} />
      <UserList users={users} />
      <ToastContainer />
    </div>
  );
};

export default App;
