import React from 'react'

import { HeaderWrapper } from './Style'

import Wrap from "../Wrap/Wrap";

function Header() {
  return (
    <>
      <HeaderWrapper>
        <Wrap>
          <h1>React Portfolio</h1>
        </Wrap>
      </HeaderWrapper>
    </>
  );
}

export default Header