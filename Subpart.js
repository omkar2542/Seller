import React from 'react'

import './Subpart.css'

export default function Subpart() {
  return (
    <div  className='subpart'>
    <div className='headline-a'>Please Note:</div>
      <div className='text-ab'>
       <div> 1. The Currency figures on the Dashboard is USD equivalent.</div>
        2. There are 3 days of reporting lag to adjust for orders changes such as return and payment failures.
      </div>
    </div>
  )
}
