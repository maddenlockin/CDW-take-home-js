import React, { useState } from 'react'
import { createURL } from '../utils/fetch-utils';

export default function Search() {
  const [username, setUsername] = useState('');
    
  async function handleSubmit(e) {
    e.preventDefault();
    await createURL({username});

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
