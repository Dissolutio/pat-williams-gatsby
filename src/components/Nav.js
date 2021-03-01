import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function Nav({ navIds }) {
  return (
    <StyledLinksContainer>
      <nav>
        {navIds.map((navId) => (
          <StyledAnchorLink href={`#${navId}`}>{navId}</StyledAnchorLink>
        ))}
      </nav>
    </StyledLinksContainer>
  );
}

const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  background: var(--bgOpaque);
  @media screen and (min-width: 45em) {
  }
`;
const StyledAnchorLink = styled(AnchorLink)`
  height: 48px;
  margin-left: 0;
  margin-right: 0;
  padding-left: 8px;
  padding-right: 8px;
  color: inherit;
  font-size: 1.2em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  @media screen and (min-width: 45em) {
    font-size: 1.5em;
    padding-left: 16px;
    padding-right: 16px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
