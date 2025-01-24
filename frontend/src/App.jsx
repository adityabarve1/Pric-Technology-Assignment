import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:9000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Add new user
  const addUser = async (user) => {
    try {
      const response = await fetch('http://localhost:9000/api/users', {
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

  // Delete a user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('User deleted successfully!');
        fetchUsers();
      } else {
        toast.error('Failed to delete user');
      }
    } catch (error) {
      toast.error('Error deleting user');
      console.error('Error deleting user:', error);
    }
  };

  // Update a user
  const updateUser = async (id, user) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success('User updated successfully!');
        fetchUsers();
      } else {
        toast.error('Failed to update user');
      }
    } catch (error) {
      toast.error('Error updating user');
      console.error('Error updating user:', error);
    }
  };

  useEffect(() => {
    if (currentPage === 'users') {
      fetchUsers();
    }
  }, [currentPage]);

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar onNavigate={setCurrentPage} />
        <div className="mt-20 p-8">
          <Routes>
            <Route exact path="/" element={
              <div className="text-center py-8">
                <h1 className="text-4xl font-bold">Welcome to the User Management System</h1>
                <p className="mt-4 text-lg">Add, update, or delete user data</p>
                <UserForm onSave={addUser} />
              </div>
            } />
            <Route path="/users" element={
              <UserList
                users={users}
                onDelete={deleteUser}
                onUpdate={updateUser}
              />
            } />
          </Routes>
        </div>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
