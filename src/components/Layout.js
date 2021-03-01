import React from 'react';
import '../styles/font.css';
import { GlobalStyles } from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import 'normalize.css';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Typography />
    {children}
  </div>
);
export default Layout;
