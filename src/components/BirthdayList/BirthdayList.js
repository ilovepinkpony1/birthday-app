import React, { useEffect } from 'react';
import { getDatesRange } from '../../utils/getDatesRange';
import User from '../User/User';
import './birthdayList.scss';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import { RECENT, NEARBY } from '../../constants';

const BirthdayList = props => {
  const { 
    data, 
    loadData, 
    tab, 
    requested, 
    addUsers,
    usersAddedForRecent,
    usersAddedForNearby,
  } = props;

  useEffect(() => {
    if (!requested && !data) {
      const [dateFrom, dateTo] = getDatesRange(tab);

      loadData(dateFrom, dateTo, tab);
    }
  });

  if (!data) {
    const override = css`
      display: block;
      margin: 2px auto;
      border-color: red;
    `;
    return (
      <div className="spinner">
        <SyncLoader
          css={override}
          sizeUnit={'px'}
          size={15}
          color={'#e00028'}
        />
      </div>
    );
  } else if (data.length === 0) {
    return (
      <p className="empty-list">
        К сожалению, в данный момент нет данных для отображения
      </p>
    );
  } else {
    return (
      <>
        <div className="birthday-list_wrapper">

          {data.map(user => (
            <User
              key={user.id}
              name={user.name}
              avatarUrl={user.avatarUrl}
              jobTitle={user.jobTitle}
              birthday={user.birthday}
            />
          ))}

        </div>

        {tab === RECENT ? (
          <ShowMoreButton 
            addUsers={addUsers}
            tab={tab}
            usersAddedForRecent={usersAddedForRecent}
            usersAddedForNearby={usersAddedForNearby}
            />
        ) : tab === NEARBY ? (
            <ShowMoreButton 
              addUsers={addUsers} 
              tab={tab}
              usersAddedForRecent={usersAddedForRecent}
              usersAddedForNearby={usersAddedForNearby} />
        ) : null}
      </>
    );
  }
};

export default BirthdayList;
