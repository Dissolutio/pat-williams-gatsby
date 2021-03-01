import styled from 'styled-components';

export const StyledP = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 32px;
`;
export const StyledH2 = styled.h2`
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
export const StyledNarrowDiv = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`;
export const StyledSection = styled.section`
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
