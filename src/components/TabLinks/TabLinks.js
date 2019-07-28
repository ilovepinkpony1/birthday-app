import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './tabLinks.scss';
import BirthdayListHandler from '../BirthdayList/BirthdayListHandler';
import { TODAY, RECENT, NEARBY } from '../../constants';

const TabLinks = (props) => {
  const { 
    setRequestFalse, 
    activeLink, 
    setActiveLink 
  } = props;
  
  return (
    <BrowserRouter>

    <div className="tab-links_wrapper">

      <div className="tab-link_container">
        <Link 
          to='/recent/' 
            onClick={() => {
              setRequestFalse();
              setActiveLink(RECENT);
            }}
            className={activeLink === RECENT ? 'tab-link active' : 'tab-link'}
        >
          недавние<br/>
          <span className="tab-link_under-text">
            даты
          </span>
        </Link>
      </div>

      <div className="tab-link_container">
        <Link 
          to='/' 
            onClick={() => {
              setRequestFalse();
              setActiveLink(TODAY);
            }}
            className={activeLink === TODAY ? 'tab-link active' : 'tab-link'}
        >
          сегодня
        </Link>
      </div>

      <div className="tab-link_container">
        <Link 
          to='/nearby/'
          onClick={() => {
            setRequestFalse();
            setActiveLink(NEARBY);
          }}
            className={activeLink === NEARBY ? 'tab-link active' : 'tab-link'}
        >
          ближайшие<br/>
          <span className="tab-link_under-text">
            даты
          </span>
        </Link>
      </div>

    </div>

      <Route path="/recent/" render={() => <BirthdayListHandler tab={RECENT} />} />

      <Route path="/" exact render={() => <BirthdayListHandler tab={TODAY} />} />
      
      <Route path="/nearby/" render={() => <BirthdayListHandler tab={NEARBY} />} />

    </BrowserRouter>
  )
}

export default TabLinks;
