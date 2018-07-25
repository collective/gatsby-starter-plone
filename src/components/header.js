import React from 'react';
import { Link } from 'gatsby';

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteData.title}
        </Link>
      </h1>
      <h5
        style={{
          color: 'white',
          textDecoration: 'none',
          margin: '16px 0 0 0',
        }}
      >
        {siteData.subTitle}
      </h5>
    </div>
  </header>
);

export default Header;
