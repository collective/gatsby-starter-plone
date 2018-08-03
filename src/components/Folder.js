import React from 'react';
import { graphql, Link } from 'gatsby';

const Folder = ({ data, title }) => (
  <nav key={data._id}>
    <h1>{title ? title : data.title}</h1>
    <p>
      <strong>{data.description}</strong>
    </p>
    <ul className="list-group">
      {data.items.filter(item => item.title).map(item => (
        <li key={item._path} className="list-group-item">
          <p>
            <Link to={item._path}>{item.title}</Link>
          </p>
          {item.description && <p>{item.description}</p>}
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
    items {
      _id
      _path
      _type
      description
      title
    }
    _path
  }

  fragment Site on PloneSite {
    id
    title
    items {
      _id
      _path
      _type
      description
      title
    }
    _path
  }
`;
