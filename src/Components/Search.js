import React, { useState } from 'react'

export default function Search() {
    const [username, setUsername] = useState('maddenlockin');
    
  return (
    <div className="search-bar">
      <form onSubmit={(e) => {
            setUsername(e.target.value)}}>
        <input value={username} />
        <button>
          Search
        </button>
      </form>
    </div>
  );
}
