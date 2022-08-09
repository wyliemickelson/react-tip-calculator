import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import Calculation from './Calculation';

const StyledCalculations = styled.div`
  margin-top: 2rem;
  padding: 2rem 1rem;
  background-color: hsl(183, 100%, 15%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  * {
    color: white;
  }
`

const Calculations = () => {
  return (
    <StyledCalculations>
      <Calculation title='Tip Amount' number='0.00'/>
      <Calculation title='Total' number='0.00' />
      <Button text="RESET" bg="hsl(172, 67%, 45%)" textColor="hsl(183, 100%, 15%)" />
    </StyledCalculations>
  )
}

export default Calculations