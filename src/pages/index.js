import React from 'react';
import styled from 'styled-components';

import { MP3Player } from '../components/MP3Player';
import { ShowsList } from '../components/ShowsList';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

// These become the href of links i.e. '#shows' and
// the id tags for corresponding html sections to smooth-scroll to
const navIds = ['releases', 'shows', 'contact'];

export default function HomePage() {
  return (
    <>
      <Nav navIds={navIds} />
      <StyledPageWrapper id="main">
        <Hero />
        <StyledNarrowDiv>
          <StyledSection id={navIds[0]}>
            <StyledH2>Leon River EP</StyledH2>
            <MP3Player />
          </StyledSection>
          <StyledSection id={navIds[1]}>
            <StyledH2>2021 Shows</StyledH2>
            <ShowsList />
          </StyledSection>
          <StyledSection id={navIds[2]}>
            <StyledH2>Contact</StyledH2>
            <StyledP>patrick@patwilliamsmusic.com</StyledP>
          </StyledSection>
        </StyledNarrowDiv>
        <Footer />
      </StyledPageWrapper>
    </>
  );
}
const StyledP = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
`;
const StyledH2 = styled.h2`
  font-size: 32px;
  text-align: center;
  line-height: 1.125;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 32px;
  @media screen and (min-width: 26em) {
    font-size: 48px;
    margin-bottom: 64px;
  }
`;
const StyledNarrowDiv = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`;
const StyledSection = styled.section`
  padding-top: 64px;
  padding-bottom: 64px;
  @media screen and (min-width: 45em) {
    padding-top: calc(3rem + 4vw);
    padding-bottom: calc(3rem + 4vw);
  }
  @media screen and (min-width: 120em) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;
const StyledPageWrapper = styled.div`
  //account for fixed navigation bar
  padding-top: 96px;
  @media screen and (min-width: 45em) {
    padding-top: 60px;
  }
`;
