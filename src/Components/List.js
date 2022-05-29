import React from 'react'
import { getURLs } from '../utils/fetch-utils'
import Item from './Item'

// map over the return from firebase and render Item for each

export default function List() {
  const list = getURLs();
  
  return (
    <>
      <Item />
    </>
  )
}
