import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './tabLinks.css';
import BirthdayListHandler from '../BirthdayList/BirthdayListHandler';
import { TODAY, RECENT, NEARBY } from '../../constants';


const TabLinks = () => {
  return (
    <BrowserRouter>

    <div className="tab-links_wrapper">

      <div className="tab-link_container">
        <Link to="/recent/">
          недавние
        </Link>
      </div>

      <div className="tab-link_container">
        <Link to="/">
          сегодня
        </Link>
      </div>

      <div className="tab-link_container">
        <Link to="/nearby/">
          ближайшие
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
