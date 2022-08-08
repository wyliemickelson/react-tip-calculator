import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 2rem;

  div {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>S P L I</h1>
        <h1>T T E R</h1>
      </div>
    </StyledHeader>
  )
}

export default Header