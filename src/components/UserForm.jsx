import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
        .catch(error => console.error('Error fetching user:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };

    if (id) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
        .then(() => history.push('/'))
        .catch(error => console.error('Error updating user:', error));
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(() => history.push('/'))
        .catch(error => console.error('Error adding user:', error));
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;
