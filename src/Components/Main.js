import React, {useState} from 'react'
import { StyledOptions } from '../Styles/Options.styled'
import Option from './Option'
import { ReactComponent as moneyIcon } from '../assets/icon-dollar.svg'
import { ReactComponent as personIcon } from '../assets/icon-person.svg'
import styled from 'styled-components';
import Calculations from './Calculations'

const tipPercentages = [5, 10, 15, 25, 50]

const StyledMain = styled.main`
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
`

const Main = () => {
  const [billTotal, setBillTotal] = useState(0.00)
  const [numPeople, setNumPeople] = useState(0)
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);

  const handleSelectedTip = (tipPercentageIndex) => {
    setSelectedTipIndex(tipPercentageIndex)
  }

  const handleBill = (e) => {
    setBillTotal(e.target.value)
  }

  const handleNumPeople = (e) => {
    setNumPeople(e.target.value)
  }

  return (
    <StyledMain>
      <StyledOptions>
        <Option title="Bill" onChange={handleBill}
          inputType={{ name: 'text', icon: moneyIcon, placeholder: '0.00' }} />
        <Option title="Select Tip %" onChange={handleSelectedTip} selectedChoice={selectedTipIndex}
          inputType={{ name: 'choiceList', choices: tipPercentages }} />
        <Option title="Number of People" onChange={handleNumPeople}
          inputType={{ name: 'text', icon: personIcon, placeholder: 0 }} />
      </StyledOptions>
      <Calculations numPeople={numPeople} billTotal={billTotal} tipPercentage={tipPercentages[selectedTipIndex]} />
    </StyledMain>
  )
}

export default Main