import React from 'react';
import './showMoreButton.scss';
import { RECENT, NEARBY } from '../../constants';

const ShowMoreButton = (props) => {
  const { 
    addUsers,
    tab,
    usersAddedForRecent,
    usersAddedForNearby } = props;

  return (
    <div className="show-more-button_wrapper">

      <button
        className="show-more-button"
        onClick={() => {
          if ((tab === RECENT && !usersAddedForRecent)
              || (tab === NEARBY && !usersAddedForNearby)) {
            addUsers(tab);
          }
        }}>
          показать еще
        </button>
        
    </div>
  )
}

export default ShowMoreButton;
