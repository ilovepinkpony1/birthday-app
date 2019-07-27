import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './tabLinks.css';
import BirthdayList from '../BirthdayList/BirthdayList';


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

    <Route path="/" component={BirthdayList} />

    </BrowserRouter>
  )
}

export default TabLinks;
