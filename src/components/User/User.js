import React from 'react';
import { normilizeBirthDate } from '../../utils/normalizeBirthDate';
import './user.scss';

export default function User(props) {
  const { 
    name, 
    jobTitle, 
    avatarUrl, 
    birthday 
  } = props;

  return (
    <div className='user'>
      <div className='user-image_wrapper'>
        <img
          src={`http://test.anromsocial.com${avatarUrl}`}
          alt={`${name}`}
          className='user-image'
        />
      </div>

      <div className='user-description_wrapper'>
        <p className='user-description_name'>{name}</p>
        <p className='user-description_title'>{jobTitle}</p>
        <p className='user-description_bday'>{normilizeBirthDate(birthday)}</p>
      </div>
    </div>
  );
}
