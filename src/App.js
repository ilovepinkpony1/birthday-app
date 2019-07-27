import React, { useState, useEffect } from 'react';
import BirthdayList from './components/BirthdayList/BirthdayList';
import AppHeaderLogo from './components/AppHeaderLogo/AppHeaderLogo';
import HeaderGiftPng from './images/gift.png';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton';
import TabLinks from './components/TabLinks/TabLinks';
const App = () => {
  const [usersData, usersDataHandler] = useState(null);

  useEffect(() => {
    if (!usersData) {
      fetch(
        'http://test.anromsocial.com/api/birthdays?dateFrom=01.01&dateTo=01.02'
      )
        .then(response => response.json())
        .then(data => usersDataHandler(data.users))
        .catch(err => console.error(err));
    }
  });

  return (
    <div className='container'>
      <AppHeaderLogo src={HeaderGiftPng} alt={'gift-logo'} />
      <TabLinks />
      <ShowMoreButton />
    </div>
  );
};

export default App;
