import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "back-guitar-hero.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1400
            maxHeight: 800
            quality: 70
            cropFocus: NORTHEAST
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <StyledBanner>
      <Img fluid={data.fileName.childImageSharp.fluid} />
      <StyledHeroContentDiv>
        <StyledContentWrapper>
          <HeroContent />
        </StyledContentWrapper>
      </StyledHeroContentDiv>
    </StyledBanner>
  );
};
const HeroContent = () => {
  return (
    <>
      <h1>Pat Williams</h1>
      <p>Secular Folk Music</p>
    </>
  );
};

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--black);
  img {
    z-index: 0;
  }
`;

const StyledHeroContentDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: calc(4rem + 4vw);
  padding-bottom: calc(4rem + 4vw);
  color: var(--white);
  text-align: center;
  z-index: 1;

  @media screen and (min-width: 90em) {
    padding-top: 128px;
    padding-bottom: 128px;
  }
  h1 {
    font-size: 1.5em;
    line-height: 1;
    font-weight: 700;
    margin-top: 0;
    @media screen and (min-width: 64em) {
      font-size: 64px;
    }
    @media screen and (min-width: 90em) {
      font-size: 72px;
    }
  }
  p {
    margin-bottom: 1em;
    font-size: 0.8em;
    font-weight: 400;
    @media screen and (min-width: 45em) {
      font-size: 1em;
    }
    @media screen and (min-width: 90em) {
      margin-bottom: 2em;
    }
  }
`;
