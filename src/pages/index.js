import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Document from '../components/Document';
import Folder from '../components/Folder';

const nodes = query => (query ? query['edges'] : []).map(edge => edge.node);

const IndexPage = ({ data }) => (
  <Layout>
    <Document
      data={data.ploneDocument}
      images={nodes(data['allPloneImage'])}
      files={nodes(data['allPloneFile'])}
    />
    <hr style={{ background: '#e8eef2' }} />
    <Folder data={data.ploneSite} title="Contents" />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    ploneDocument(_path: { in: ["/frontpage/", "/front-page/"] }) {
      ...Document
    }
    ploneSite(_path: { eq: "/" }) {
      ...Site
    }
    allPloneFile(filter: { _backlinks: { eq: "/frontpage/" } }) {
      edges {
        node {
          ...File
        }
      }
    }
    allPloneImage(filter: { _backlinks: { eq: "/frontpage/" } }) {
      edges {
        node {
          ...Image
        }
      }
    }
  }
`;
