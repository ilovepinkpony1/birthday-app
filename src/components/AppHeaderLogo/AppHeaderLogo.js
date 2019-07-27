import React from 'react';
import './appHeaderLogo.css';

const AppHeaderLogo = (props) => {
  const { src, alt } = props;

  return (
    <section className="header-wrapper">
      <div className="header-logo_container">
        <img src={src} alt={alt} />
      </div>
    </section>
  )
}

export default AppHeaderLogo;
