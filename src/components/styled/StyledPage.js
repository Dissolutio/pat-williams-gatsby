import styled from 'styled-components';

export const StyledP = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
`;
export const StyledH2 = styled.h2`
  font-size: 1.6em;
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
export const StyledNarrowDiv = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 1.6em;
`;
export const StyledSection = styled.section`
  padding-top: 1em;
  padding-bottom: 1em;
  @media screen and (min-width: 45em) {
    padding-top: 1.6em;
    padding-bottom: 1.6em;
  }
  @media screen and (min-width: 90em) {
    padding-top: 3.2em;
    padding-bottom: 3.2em;
  }
`;
