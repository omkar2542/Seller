import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';

import './SubAccount1.css'
import { Button } from '@mui/material';
export default function Subaccount1(props) {
  return (
    <div className='sub'>
    <div className='acc-count1'>
    <div className='iscon'><VideocamIcon/></div> 
      {props.text}
      
    </div>
    </div>
  )
}
