import React from 'react'

import { FooterWrapper } from "./Style";

import Block from "../Block/Block";
import Wrap from "../Wrap/Wrap";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Block>
          <Wrap>
            <p>Footer</p>
          </Wrap>
        </Block>
      </FooterWrapper>
    </>
  );
}

export default Footer