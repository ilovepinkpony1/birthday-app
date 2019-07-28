import React from 'react';
import { normilizeBirthDate } from '../../utils/normalizeBirthDate';


export default function User(props) {
  const { name, jobTitle, avatarUrl, birthday } = props
  return (
    <div className="user">
      <img 
        src={`http://test.anromsocial.com${avatarUrl}`} 
        alt={`${name}`}
      />
      <p>{name}</p>
      <p>{jobTitle}</p>
      <p>{normilizeBirthDate(birthday)}</p>
    </div>
  )
}
