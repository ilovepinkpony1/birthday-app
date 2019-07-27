import './birthdayList.css';
import React from 'react';

const BirthdayList = (props) => {
  const { data, loadData, tab } = props;

  if (!data) {
    loadData('01.01', '01.02', tab)
    return (
      'loading...'
    )
  } else {
    console.log(data);
    return (
      'loaded'
    )
  }

}

export default BirthdayList;
