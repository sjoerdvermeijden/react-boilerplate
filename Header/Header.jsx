import React from 'react'

import { HeaderWrapper } from './Style'

import Wrap from "../Wrap/Wrap";
import Block from "../Block/Block";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Block>
          <Wrap>
            <p>Lorem, ipsum dolor.</p>
          </Wrap>
        </Block>
      </HeaderWrapper>
    </>
  );
}

export default Header