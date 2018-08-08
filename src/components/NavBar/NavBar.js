import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import './NavBar.css';

const NavBar = ({ active }) => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        ploneNavigation(_path: { eq: "/" }) {
          items {
            _id
            _path
            title
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            Gatsby Starter Plone
          </Link>
          <ol className="navbar-menu">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            {data.ploneNavigation.items
              .filter(item => item._path !== '/')
              .map(item => (
                <li
                  key={item._id}
                  className={
                    item._path === active ||
                    (active || '').startsWith(item._path)
                      ? 'navbar-item active'
                      : 'navbar-item'
                  }
                >
                  <Link to={item._path}>{item.title}</Link>
                </li>
              ))}
          </ol>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
