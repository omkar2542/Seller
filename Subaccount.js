import React from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';

import './Subaccount.css'
export default function Subaccount(props) {
  return (
    <div className='sub-1'>
    <div className='acc-count-1'>
      {props.text}
      <div className='numbers-a'>10</div>
    </div>
    </div>
  )
}
