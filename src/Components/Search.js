import React, { useState } from 'react'
import { createURL, githubStatus } from '../utils/fetch-utils';

export default function Search({ fetchList }) {
  const [username, setUsername] = useState('');
    
  async function checkUser(){
    const status = await githubStatus(username);
    (status !== 200) 
      ? alert('Error! This is not yet a Github username')
      : await createURL({username});
        await fetchList();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await checkUser();
    setUsername('');
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}
