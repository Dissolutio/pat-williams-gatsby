import React from 'react';
import styled from 'styled-components';
import { IconBar } from './IconBar';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledStrong>Follow & Subscribe</StyledStrong>
      <IconBar />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  text-align: center;
`;
const StyledStrong = styled.strong`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
