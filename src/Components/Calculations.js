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

const Calculations = ({ billTotal, numPeople, tipPercentage }) => {

  const calcTipAmount = () => {
    return Number(billTotal) * Number(tipPercentage) / 100 / Number(numPeople);
  }

  const calcTotalAmount = () => {
    return Number(billTotal) / Number(numPeople) + calcTipAmount();
  }

  const toUSD = (number) => {
    const USD = Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    return USD.format(number).replace('$', '');
  }

  return (
    <StyledCalculations>
      <Calculation title='Tip Amount' number={toUSD(calcTipAmount())}/>
      <Calculation title='Total' number={toUSD(calcTotalAmount())} />
      <Button text="RESET" bg="hsl(172, 67%, 45%)" textColor="hsl(183, 100%, 15%)" />
    </StyledCalculations>
  )
}

export default Calculations