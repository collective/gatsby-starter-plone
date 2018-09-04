/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { LocationProvider } from '@reach/router';
import { navigate } from 'gatsby';

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

const useStickyLocation = current => {
  const previous = localStorage.getItem('location') || null;
  localStorage.setItem('location', current);
  if (window.history.length <= 1 && previous !== null && previous !== current) {
    navigate(previous);
  }
};


export const wrapRootElement = ({ element }) => (
  <LocationProvider>
    {({ location }) => {
      // Save navigated location on iOS PWA; Restore it on reload
      if (isIos() && window.navigator.standalone) {
        useStickyLocation(location.pathname);
      }
      return element;
    }}
  </LocationProvider>
);
