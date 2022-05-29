import React, { useState } from 'react'

export default function Search() {
    const [username, setUsername] = useState('maddenlockin');
    
  return (
    <div className='search-bar'>
      <input value={username} />
      <button onClick={(e) => {setUsername(e.target.value)}}>Search</button>
    </div>
  )
}
