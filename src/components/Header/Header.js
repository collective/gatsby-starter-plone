import React from 'react';

import './Header.css';

const Header = ({ siteData }) => (
  <header
    style={{
      background: '#113156',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div className="title">{siteData.title}</div>
      <div className="sub-title">{siteData.subTitle}</div>
    </div>
  </header>
);

export default Header;
