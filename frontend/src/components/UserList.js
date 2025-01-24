// frontend/src/components/UserList.js

const UserList = ({ users }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index} className="border-b py-2">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;
  