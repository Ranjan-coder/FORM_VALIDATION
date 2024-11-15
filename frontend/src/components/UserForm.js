import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../Api';

const UserForm = ({ userId, setUsers, closeForm, existingUser }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (existingUser) {
      setName(existingUser.name);
      setPhone(existingUser.phone);
      setEmail(existingUser.email);
    }
  }, [existingUser]);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    if (photo) formData.append('photo', photo);

    try {
      if (userId) {
        await updateUser(userId, formData);
      } else {
        await createUser(formData);
      }
      setUsers((prevUsers) => [...prevUsers, { name, phone, email, photo: URL.createObjectURL(photo) }]);
      closeForm();
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button type="submit">{userId ? 'Update' : 'Create'} User</button>
      <button type="button" onClick={closeForm}>Cancel</button>
    </form>
  );
};

export default UserForm;
