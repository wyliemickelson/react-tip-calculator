import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Calculation from './Calculation';

const StyledCalculations = styled.div`
  padding: 1rem;
  background-color: hsl(183, 100%, 15%);
  border-radius: 10px;

  * {
    color: white;
  }
`

const Calculations = () => {
  return (
    <StyledCalculations>
      <Calculation title='Tip Amount' />
      <Calculation title='Total' />
      <Button text="RESET" bg="hsl(172, 67%, 45%)" textColor="hsl(183, 100%, 15%)" />
    </StyledCalculations>
  )
}

export default Calculations