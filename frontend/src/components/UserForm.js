// frontend/src/components/UserForm.js

import { useState } from 'react';

const UserForm = ({ onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        className="border p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full">
        Save User
      </button>
    </form>
  );
};

export default UserForm;
