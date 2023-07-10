import React from 'react'
import './Subheader.css'
import Subaccount from './Subaccount'
import Subpart from './Subpart'
import Dropdown from './Dropdown'
import SubDate from './SubDate'
import SubAccount1 from './SubAccount1'




export default function Subheader() {
  return (
      <div className='subacc'>
      <Subaccount text="Account Selected"/>
      <SubDate/>
      <SubAccount1 text="LEARN"/>
      <Subpart/>
      <Dropdown/>
      </div>
    
  )
}
