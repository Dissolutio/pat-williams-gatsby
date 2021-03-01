import React from 'react';
import styled from 'styled-components';

import { MP3Player } from '../components/MP3Player';
import { ShowsList } from '../components/ShowsList';
import { OldNav } from '../components/OldNav';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import {
  StyledNarrowDiv,
  StyledSection,
  StyledH2,
  StyledP,
} from '../components/styled/StyledPage';

// These become the href of links i.e. '#shows' and
// the id tags for corresponding html sections to smooth-scroll to
const navIds = ['releases', 'shows', 'contact'];

export default function HomePage() {
  return (
    <>
      <OldNav navIds={navIds} />
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

const StyledPageWrapper = styled.div`
  //account for fixed navigation bar
  padding-top: 96px;
  @media screen and (min-width: 45em) {
    padding-top: 60px;
  }
`;
