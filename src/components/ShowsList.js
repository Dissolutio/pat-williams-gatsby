import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const exampleShows = [
  {
    name: "4th of July!",
    date: "2021-07-05",
    location: "To be decided1, TX",
    // mapURL: "#",
    // infoURL: "#",
  },
];

export const ShowsList = () => {
  return (
    <StyledOL>
      {exampleShows.map((show) => (
        <ShowItem key={show.name} show={show} />
      ))}
    </StyledOL>
  );
};
const ShowItem = ({ show }) => {
  const { name, date, location, mapURL, infoURL } = show;
  const showDate = new Date(date);
  const month = format(showDate, "MMM");
  const day = format(showDate, "d");
  return (
    <StyledLI>
      <StyledTime datetime={`${date}`}>
        <span className="month">{`${month}`}</span>
        <span className="day">{`${day}`}</span>
      </StyledTime>
      <StyledSecondPartDiv>
        <StyledMiddleCol>
          <StyledH4>{`${name}`}</StyledH4>
          <StyledLocationDiv>
            <span>{location}</span>
            <a href={mapURL} rel="external nofollow">
              <strong>Map</strong>
            </a>
          </StyledLocationDiv>
        </StyledMiddleCol>
        <StyledLastCol>
          <StyledRSVPLink href={infoURL} rel="external nofollow">
            Detail / RSVP
          </StyledRSVPLink>
        </StyledLastCol>
      </StyledSecondPartDiv>
    </StyledLI>
  );
};
const StyledRSVPLink = styled.a`
  display: inline-block;
  width: 100%;
  padding: 2px;
  margin-top: 4px;
  margin-bottom: 4px;
  border: 2px solid;
  border-radius: 2px;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  color: #111;
  @media screen and (min-width: 26em) {
    padding: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 45em) {
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;
const StyledLocationDiv = styled.div`
  color: #737373;
  span,
  a,
  strong {
    font-size: 14px;
  }
  strong {
    color: #737373;
    padding-left: 0.3em;
  }
`;
const StyledH4 = styled.h4`
  line-height: 1.125;
  font-weight: 700;
  margin: 0;
  margin-top: 0;
  font-size: 20px;
  padding-top: 0px;
  padding-bottom: 4px;
  @media screen and (min-width: 26em) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const StyledLastCol = styled.div`
  flex-basis: calc(9rem + 2vw);
  flex-grow: 1;
  text-align: right;
  margin-right: 16px;
`;
const StyledMiddleCol = styled.div`
  flex-basis: 14rem;
  flex-grow: 999;
  margin-bottom: 8px;
  padding-right: 16px;
  @media screen and (min-width: 26em) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 45em) {
    padding-right: 32px;
  }
`;
const StyledOL = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledLI = styled.li`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  &:first-of-type {
    border-top: 2px solid;
  }
`;
const StyledSecondPartDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledTime = styled.time`
  box-sizing: border-box;
  flex-basis: 72px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 72px;
  width: 72px;
  padding: 16px;
  margin-right: 16px;
  color: #fff;
  line-height: 1.125;
  text-align: center;
  border-radius: 2px;
  background: #07c;
  @media screen and (min-width: 45em) {
    flex-basis: 90px;
    height: 90px;
    width: 90px;
    margin-right: 32px;
  }
  span {
    text-align: center;
    color: #fff;
    line-height: 1.125;
  }
  span.month {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  span.day {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: -4px;
  }
`;
