import React from 'react'
import TextInput from './TextInput'
import ChoiceList from './ChoiceList'

import styled from 'styled-components';
const StyledOption = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
`

const Option = ({ title, inputType, onChange, selectedChoice }) => {
  return (
      <StyledOption>
        <h2>{title}</h2>
        {inputType.name === 'text' ? 
        <TextInput onChange={onChange} Icon={inputType.icon} placeholder={inputType.placeholder} /> 
        : <ChoiceList choices={inputType.choices} onChange={onChange} selectedChoice={selectedChoice} /> }
      </StyledOption>
  )
}

export default Option