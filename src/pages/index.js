import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h2>{data.ploneDocument.title}</h2>
    <p>{data.ploneDocument.description}</p>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    ploneDocument(_path: { eq: "/frontpage/" }) {
      id
      title
      description
    }
  }
`;
