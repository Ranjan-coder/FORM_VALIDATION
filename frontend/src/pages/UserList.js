// import React, { useState, useEffect } from 'react';
// import { getUsers, deleteUser } from '../Api';
// import UserForm from '../components/UserForm';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await getUsers();
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));  // Remove deleted user
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setShowForm(true);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//     setSelectedUser(null);  // Clear selected user
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       <button onClick={() => setShowForm(true)}>Add New User</button>

//       {showForm && (
//         <UserForm
//           userId={selectedUser ? selectedUser._id : null}
//           setUsers={setUsers}
//           closeForm={closeForm}
//           existingUser={selectedUser}
//         />
//       )}

//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             <img src={`http://localhost:5000/${user.photo}`} alt={user.name} width="50" height="50" />
//             <p>{user.name}</p>
//             <p>{user.phone}</p>
//             <p>{user.email}</p>
//             <button onClick={() => handleEdit(user)}>Edit</button>
//             <button onClick={() => handleDelete(user._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;





import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../Api';
import UserForm from '../components/UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));  // Remove deleted user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedUser(null);  // Clear selected user
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setShowForm(true)}>Add New User</button>

      {showForm && (
        <UserForm
          userId={selectedUser ? selectedUser._id : null}
          setUsers={setUsers}
          closeForm={closeForm}
          existingUser={selectedUser}
        />
      )}

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {/* Use the full URL path from the server for the photo */}
            <img src={`http://localhost:5000/${user.photo}`} alt={user.name} width="50" height="50" />
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
