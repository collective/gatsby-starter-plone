/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  // Support for apple-touch-icons may be soon part of gatsby-plugin-manifest
  // https://github.com/gatsbyjs/gatsby/pull/7256
  setHeadComponents([
    <link
      key={'apple-touch-icon'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-48x48.png')}
    />,
    <link
      key={'apple-touch-icon-72'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-72x72.png')}
      sizes="72x72"
    />,
    <link
      key={'apple-touch-icon-96'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-96x96.png')}
      sizes="96x96"
    />,
    <link
      key={'apple-touch-icon-144'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-144x144.png')}
      sizes="144x144"
    />,
    <link
      key={'apple-touch-icon-192'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-192x192.png')}
      sizes="192x192"
    />,
    <link
      key={'apple-touch-icon-256'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-256x256.png')}
      sizes="256x256"
    />,
    <link
      key={'apple-touch-icon-384'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-384x384.png')}
      sizes="384x384"
    />,
    <link
      key={'apple-touch-icon-512'}
      rel="apple-touch-icon"
      href={withPrefix('/icons/icon-512x512.png')}
      sizes="512x512"
    />,
  ]);
};
