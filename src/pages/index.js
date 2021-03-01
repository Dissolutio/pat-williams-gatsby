import React from 'react';
import styled from 'styled-components';

import { MP3Player } from '../components/MP3Player';
import { ShowsList } from '../components/ShowsList';
import { Footer } from '../components/Footer';
import { StyledBGHero } from '../components/StyledBGHero';
import {
  StyledNarrowDiv,
  StyledSection,
  StyledH2,
  StyledP,
} from '../components/styled/StyledPage';
import { IconBar } from '../components/IconBar';

// These become the href of links i.e. '#shows' and
// the id tags for corresponding html sections to smooth-scroll to
const navIds = ['releases', 'shows', 'contact'];

export default function HomePage() {
  return (
    <>
      <StyledBGHero navIds={navIds} />
      <StyledNarrowDiv>
        <IconBar />
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
    </>
  );
}
