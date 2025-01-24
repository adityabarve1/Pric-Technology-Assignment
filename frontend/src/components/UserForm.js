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
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Add New User</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          id="name"
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          id="email"
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="age" className="block text-white text-sm font-medium mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
          id="age"
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
      >
        Save User
      </button>
    </form>
  );
};

export default UserForm;
