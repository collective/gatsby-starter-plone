import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <article>
      <h1>{data.ploneDocument.title}</h1>
      <p>{data.ploneDocument.description}</p>
    </article>
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
