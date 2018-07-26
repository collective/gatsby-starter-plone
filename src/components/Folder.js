import React from 'react';
import { graphql, Link } from 'gatsby';

const Folder = ({ data, title }) => (
  <nav key={data._id}>
    <h1>{title ? title : data.title}</h1>
    <p>
      <strong>{data.description}</strong>
    </p>
    <ul className="list-group">
      {data.children.filter(child => child.title).map(child => (
        <li key={child._path} className="list-group-item">
          <p>
            <Link to={child._path}>{child.title}</Link>
          </p>
          {child.description && <p>{child.description}</p>}
        </li>
      ))}
    </ul>
  </nav>
);

export default Folder;

export const query = graphql`
  fragment Folder on PloneFolder {
    id
    title
    description
    children {
      ...SubFolder
    }
    _path
  }

  fragment SubFolder on PloneFolder {
    id
    title
    description
    _path
  }
`;
