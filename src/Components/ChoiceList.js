import React from 'react'
import Button from './Button';
import styled from 'styled-components';

const StyledChoiceList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;

  * {
    flex: 40%;
  }
`

const ChoiceList = ({ choices }) => {
  return (
    <StyledChoiceList>
      {choices.map(choice => <Button key={choice} text={`${choice}%`}/>)}
    </StyledChoiceList>
  )
}

export default ChoiceList