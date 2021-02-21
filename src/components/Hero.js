import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { IconBar } from './IconBar';

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
      <StyledOverlay />
      <StyledHeroContentDiv>
        <StyledContentWrapper>
          <h1>Pat Williams</h1>
          <p>Secular Folk Music</p>
          <IconBar />
        </StyledContentWrapper>
      </StyledHeroContentDiv>
    </StyledBanner>
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
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(91, 99, 99, 0.1);
`;

const StyledContentWrapper = styled.div`
  --heroTextShadow: 1px 1px 2px var(--grey), 0 0 1em var(--bgAccent),
    0 0 0.2em var(--bgAccent);
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
    text-shadow: var(--heroTextShadow);
    @media screen and (min-width: 64em) {
      font-size: 2em;
    }
    @media screen and (min-width: 90em) {
      font-size: 2.5em;
    }
  }
  p {
    margin-bottom: 0.5em;
    font-size: 0.9em;
    font-weight: 500;
    text-shadow: var(--heroTextShadow);
    @media screen and (min-width: 45em) {
      font-size: 1em;
    }
    @media screen and (min-width: 90em) {
      margin-bottom: 2em;
    }
  }
  a {
    font-size: 1.2em;
    color: var(--white);
    @media screen and (min-width: 45em) {
      font-size: 1.6em;
    }
    @media screen and (min-width: 90em) {
      font-size: 1.8em;
    }
  }
`;
