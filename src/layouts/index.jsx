import React from 'react';
import g from 'glamorous';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { rhythm } from '../utils/typography';

const MyContainer = g.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  margin: '0 auto',
  maxWidth: '700',
  padding: rhythm(2),
  paddingTop: '0',
  paddingBottom: '0',
});

const MyContent = g.div({
  display: 'flex',
  flex: '1',
  paddingTop: rhythm(1),
  paddingBottom: rhythm(1),
});

export default ({ children }) => (
  <MyContainer>
    <Header />
    <MyContent>{children()}</MyContent>
    <Footer />
  </MyContainer>
);
