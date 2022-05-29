import React, { useEffect, useState } from 'react'
import { getAllURLs } from '../utils/fetch-utils'
import Item from './Item'

// map over the return from firebase and render Item for each

export default function List() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function fetchList() {
      const listRes = await getAllURLs();
      setList(listRes);
    }
    fetchList();
  }, []);
  console.log(list, 'list');
  return (
    <>
      <Item />
    </>
  )
}
