import React from 'react'
import InputWithoutIcon from '../commons/others/InputWithoutIcon'

export default function CustomInputSmall(props) {
  return (
    <div className='mb-4'>
        <p className='text-xs font-semibold mb-2 ml-2'>{props.title}</p>
        <InputWithoutIcon label={props.label}>
            {props.children}
        </InputWithoutIcon>
    </div>
  )
}
