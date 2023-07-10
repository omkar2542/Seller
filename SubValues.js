import React from 'react'
import SubUnits from './SubUnits'
import './SubValues.css'

export default function SubValues() {
  return (
    <div className='sub-value'>
      <SubUnits title='Spend' prec='$100,298.81%' subprec='23.99%' />
      <SubUnits title='CPC' prec='$1.45%' subprec='9.88%'/>
      <SubUnits title='ROAS' prec='3.00' subprec='2.90%'/>
    </div>
  )
}
