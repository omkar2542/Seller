import React from 'react'
import './SubUnits.css'

export default function SubUnits(props) {
  return (
    <div className='units'>
      <div className='text-x'>{props.title}</div>
      <div className='text-y'>{props.prec}</div>
      <div className='text-z'>{props.subprec}</div>
    </div>
  )
}
