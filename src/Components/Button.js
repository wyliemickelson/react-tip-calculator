import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.bg};
  text-align: center;
  padding: 0.5rem;
  border-radius: 5px;
  pointer-events: ${props => props.selected ? 'none' : 'all'};

  &:hover {
    background-color: ${props => props.hoverColor};
    
    p {
      color: ${props => props.bg};
    }
  }
  
  p {
    color: ${props => props.textColor};
    font-size: 20px;
  }
`

const Button = ({ bg, textColor, text, hoverColor, selected, setSelected, index}) => {
  const handleClick = () => {
    setSelected(index);
  }
  
  return (
    <StyledButton onClick={handleClick} selected={selected} bg={selected ? 'hsl(172, 67%, 45%)' : bg} textColor={selected ? 'hsl(183, 100%, 15%)' : textColor} hoverColor={hoverColor}>
      <p>{text}</p>
    </StyledButton>
  )
}

Button.defaultProps = {
  text: '',
  bg: 'hsl(183, 100%, 15%)',
  textColor: 'hsl(189, 41%, 97%)',
  hoverColor: 'hsl(185, 41%, 84%)',
  selected: false,
}

export default Button