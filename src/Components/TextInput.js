import React from 'react'

import styled from 'styled-components'
const StyledTextInput = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  background-color: hsl(189, 41%, 97%);

  * {
    background-color: hsl(189, 41%, 97%);
  }

  input {
    width: 100%;
    text-align: right;
    border: none;
    padding: 0.5rem 2rem;
    color: hsl(183, 100%, 15%);
  }
`

const TextInput = ({ Icon, placeholder }) => {

  return (
    <StyledTextInput>
      <Icon />
      <input type='number' placeholder={placeholder} />
    </StyledTextInput>
  )
}

export default TextInput