import React from 'react';
import styled from 'styled-components';

import { Nav } from './Nav';
import { Footer } from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';
import { Hero } from './Hero';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    <Nav />
    <StyledBelowFixedNavWrapper id="main">
      <Hero />
      {children}
    </StyledBelowFixedNavWrapper>
    <Footer />
  </div>
);

const StyledBelowFixedNavWrapper = styled.div`
  padding-top: 96px;
  @media screen and (min-width: 45em) {
    padding-top: 60px;
  }
`;

export default Layout;
