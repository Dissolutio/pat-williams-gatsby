import React from 'react';
import styled from 'styled-components';
import { GrYoutube } from '@react-icons/all-files/gr/GrYoutube';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';

export const IconBar = () => {
  return (
    <StyledIconDiv>
      <a
        href={`https://www.instagram.com/patwilliamstx/`}
        rel="external nofollow"
      >
        <FiInstagram />
      </a>
      <a
        href={`https://www.youtube.com/channel/UCYqVNOVGG92krQ6tzDN558Q`}
        rel="external nofollow"
      >
        <GrYoutube />
      </a>
    </StyledIconDiv>
  );
};

export const StyledIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  a {
    display: inline-block;
    padding: 4px;
    margin-left: 8px;
    margin-right: 8px;
    color: inherit;
    font-size: 32px;
    text-decoration: none;
    &:hover {
      color: var(--accent);
    }
  }
`;
