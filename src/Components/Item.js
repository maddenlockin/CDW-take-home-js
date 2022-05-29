import React from 'react'
import { ExternalLink } from 'react-external-link';

// return success or error message for given username
// display as item in list? alert?

export default function Item() {
  const username = 'maddenlockin';
  return (
    <ExternalLink href={ `https://api.github.com/users/${username}`} className='github-url' />
  );
}
