import React from 'react';
import './appHeaderLogo.scss';

const AppHeaderLogo = (props) => {
  const { src, alt } = props;

  return (
    <section className="header-wrapper">
      <div className="header-logo_container">
        <img src={src} alt={alt} className="header-logo"/>
      </div>
    </section>
  )
}

export default AppHeaderLogo;
