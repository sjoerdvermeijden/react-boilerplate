import React from 'react'

import styled from 'styled-components';

import { FooterWrapper } from "./Style"

import Wrap from "../Wrap/Wrap";

export const StyledLink = styled.a`
  color: white;
`;

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Wrap>
          <p>Github repo: <StyledLink href="/">hier</StyledLink> | Sjoerd Vermeijden</p>
        </Wrap>
      </FooterWrapper>
    </>
  );
}

export default Footer