import React from "react"
import styled from "styled-components"
import patWilliamsLogo from "../assets/images/artist-logotype.png"

export function Logo() {
  return <StyledImg src={patWilliamsLogo}></StyledImg>
}
const StyledImg = styled.img`
  height: 48px;
  width: 232px;
  /* background-color: var(--white);
  background-image: url(${patWilliamsLogo});
  background-size: contain;
  background-repeat: no-repeat; */
`
