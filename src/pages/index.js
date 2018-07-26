import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Folder from '../components/Folder';

const IndexPage = ({ data }) => (
  <Layout>
    <article>
      <h1>{data.ploneDocument.title}</h1>
      <p>{data.ploneDocument.description}</p>
    </article>
    <Folder data={data.ploneSite} title="Contents" />
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
    ploneSite(_path: { eq: "/" }) {
      ...Site
    }
  }
`;
