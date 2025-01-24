import React, { useState } from 'react';

const UserList = ({ users, onDelete, onUpdate }) => {
  const [editingUser, setEditingUser] = useState(null);

  // Handle the edit button click
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Handle the cancel button click
  const handleCancel = () => {
    setEditingUser(null);
  };

  // Handle the user update
  const handleUpdate = (id, updatedUser) => {
    onUpdate(id, updatedUser);
    setEditingUser(null); // Close the edit form after updating
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">User List</h2>
      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <div key={user._id} className="bg-gray-800 p-4 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="flex space-x-2">
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => onDelete(user._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit User Form */}
      {editingUser && (
        <div className="mt-8 bg-gray-700 p-8 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingUser._id, {
                name: e.target.name.value,
                email: e.target.email.value,
              });
            }}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingUser.name}
                  className="w-full p-2 bg-gray-900 text-white rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={editingUser.email}
                  className="w-full p-2 bg-gray-900 text-white rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserList;
