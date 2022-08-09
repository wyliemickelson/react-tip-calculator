import React from 'react'
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
  return (
    <StyledMain>
      <StyledOptions>
        <Option title="Bill"
          inputType={{ name: 'text', icon: moneyIcon, placeholder: 0 }} />
        <Option title="Select Tip %"
          inputType={{ name: 'choiceList', choices: tipPercentages }} />
        <Option title="Number of People"
          inputType={{ name: 'text', icon: personIcon, placeholder: 2 }} />
      </StyledOptions>
      <Calculations />
    </StyledMain>
  )
}

export default Main