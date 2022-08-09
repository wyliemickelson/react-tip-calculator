import React, {useState} from 'react'
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

const ChoiceList = ({ choices, selectedChoice, onChange }) => {
const isCustomChoiceSelected = selectedChoice === choices.length;

  return (
    <StyledChoiceList>
      {choices.map((choice, i) => {
        if (i === selectedChoice) {
          return <Button setSelected={onChange} index={i} key={i} text={`${choice}%`} selected={true} />
        }
        return <Button setSelected={onChange} index={i} key={i} text={`${choice}%`}/>
      })}
      <Button text='Custom %' setSelected={onChange} index={choices.length} selected={isCustomChoiceSelected} />
    </StyledChoiceList>
  )
}

export default ChoiceList