import './birthdayList.css';
import React, { useEffect } from 'react';
import { getDatesRange } from '../../utils/getDatesRange';
import User from '../User/User';

const BirthdayList = (props) => {
  const { data, loadData, tab, requested } = props;

  useEffect(() => {
    if (!requested) {
      const [dateFrom, dateTo] = getDatesRange(tab);
      loadData(dateFrom, dateTo, tab);
    }
  });

  if (!data) {
    return (
      <div>
        'loading...'
      </div>
      
    )
  } else if (data === []){
    return (
      <div>
        'no results'
      </div>
    )
  } else {
     return (
      <div>
         {data.map(user => <User 
                            key={user.id}
                            name={user.name}
                            avatarUrl={user.avatarUrl}
                            jobTitle={user.jobTitle}
                            birthday={user.birthday}
                          />)}
        no users
      </div>
    )
  }

}

export default BirthdayList;
