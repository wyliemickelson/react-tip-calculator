import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.bg};
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  
  p {
    color: ${props => props.textColor};
    font-size: 20px;
  }
`

const Button = ( props ) => {
  return (
    <StyledButton bg={props.bg} textColor={props.textColor}>
      <p>{props.text}</p>
    </StyledButton>
  )
}

Button.defaultProps = {
  text: '',
  bg: 'hsl(183, 100%, 15%)',
  textColor: 'hsl(189, 41%, 97%)',
}

export default Button