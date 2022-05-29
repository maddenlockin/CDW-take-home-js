import React from 'react'
import Item from './Item'

export default function List({ list }) {

  return (
    <ul className="url-list">
      {list.map((item) => (
        <Item key={item.id} username={item.username} />
      ))}
    </ul>
  );
}
