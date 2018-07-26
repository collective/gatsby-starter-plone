import React from 'react';
import { Link } from 'gatsby';

import './Header.css';

const Header = ({ siteData }) => (
  <header
    style={{
      background: '#007eb6',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div className="title">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteData.title}
        </Link>
      </div>
      <div className="sub-title">{siteData.subTitle}</div>
    </div>
  </header>
);

export default Header;
