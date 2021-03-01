import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Logo } from './Logo';

export function OldNav({ navIds }) {
  let isBasePath = true;
  // use inside of an effect so gatsby ssr doesn't freak out about 'window'
  React.useEffect(() => {
    isBasePath = (window?.location?.pathname ?? '') === '/';
  }, []);
  return (
    <StyledHeader role="banner">
      <StyledContainer>
        {isBasePath ? (
          <AnchorLink href="#main">
            <Logo />
          </AnchorLink>
        ) : (
          <Link to="/">
            <Logo />
          </Link>
        )}
        <nav>
          {navIds.map((navId) => (
            <StyledAnchorLink href={`#${navId}`}>{navId}</StyledAnchorLink>
          ))}
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px 0px 32px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 45em) {
    flex-direction: row;
  }
`;
const StyledAnchorLink = styled(AnchorLink)`
  height: 48px;
  margin-left: 0;
  margin-right: 0;
  padding-left: 8px;
  padding-right: 8px;
  color: inherit;
  font-size: 12px;
  line-height: 48px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  @media screen and (min-width: 45em) {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 48px;
  color: #111;
  line-height: 0;
  text-align: center;
  background: var(--bgOpaque);
  z-index: 2;
  @media screen and (min-width: 45em) {
    min-height: 60px;
    text-align: initial;
  }
`;
