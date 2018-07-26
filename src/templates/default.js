import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Folder from '../components/Folder';

const DefaultLayout = ({ data }) => (
  <Layout>
    {data && data.ploneFolder && <Folder data={data.ploneFolder} />}
  </Layout>
);

export default DefaultLayout;

export const query = graphql`
  query DefaultTemplateQuery($path: String!) {
    ploneFolder(_path: { eq: $path }) {
      ...Folder
    }
  }
`;
