import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// TODO Finish the art direction -- different photos for different screens
// https://github.com/timhagn/gatsby-background-image/tree/main/packages/gatsby-background-image#how-to-use-with-art-direction-support

const BGHero = ({ className, navIds, children }) => {
  const { wideImage } = useStaticQuery(
    graphql`
      query {
        wideImage: file(relativePath: { eq: "back-guitar-16by9.jpg" }) {
          childImageSharp {
            fluid(quality: 50, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # extra query for art direction if implemented
        # mediumToSmall: file(relativePath: { eq: "back-guitar-hero-4by3.jpg" }) {
        #   childImageSharp {
        #     fluid(maxWidth: 100, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
      }
    `
  );
  const imageData = wideImage.childImageSharp.fluid;
  return (
    <StyledBGHeroWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#fff`}
        title="Pat Williams"
        id="gbitest"
        role="img"
        aria-label="gbitest"
      >
        {children}
      </BackgroundImage>
      <StyledContentContainer>
        <h1>Pat Williams</h1>
        <Nav navIds={navIds} />
      </StyledContentContainer>
    </StyledBGHeroWrapper>
  );
};

export const StyledBGHeroWrapper = styled.div`
  width: 100%;
  --shortest: 80vh;
  --preferred: calc(100vw / 16 * 9);
  --tallest: 90vh;
  height: clamp(var(--shortest), var(--preferred), var(--tallest));
  position: relative;
  display: flex;
  overflow: hidden;
  z-index: 2;
`;

const StyledContentContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  color: var(--white);
  h1 {
    margin: 0;
    text-align: center;
    font-family: Leander;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
    font-size: 2em;
    text-shadow: #111 1px 0 10px;
    @media screen and (min-width: 45em) {
      font-size: 3em;
    }
    @media screen and (min-width: 90em) {
      font-size: 4em;
    }
  }
  a {
    text-shadow: #111 1px 0 10px;
  }
`;
export const StyledBGHero = styled(BGHero)`
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
`;

function Nav({ navIds }) {
  return (
    <StyledLinksContainer>
      <nav>
        {navIds.map((navId) => (
          <StyledAnchorLink key={navId} href={`#${navId}`}>
            {navId}
          </StyledAnchorLink>
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
  margin-top: 1em;
  @media screen and (min-width: 45em) {
    margin-top: 1em;
  }
`;
const StyledAnchorLink = styled(AnchorLink)`
  margin-left: 0;
  margin-right: 0;
  padding-left: 8px;
  padding-right: 8px;
  color: var(--white);
  font-size: 0.8em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  @media screen and (min-width: 45em) {
    font-size: 1em;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (min-width: 90em) {
    font-size: 1.2em;
  }
  &:hover {
    text-decoration: underline;
  }
`;
