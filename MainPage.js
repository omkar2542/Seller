import React from 'react'
import PieChartComponent from './PieChartComponent '
import SubValues from './SubValues'
import './MainPage.css'
export default function MainPage() {
  return (
    <div className='underpage'>
      <div className='chart-1'><PieChartComponent percentage={33.29} preview={2.39} />
      </div>
        <div className='chart-2'><SubValues/>
        <SubValues/>
        <SubValues/>
        <SubValues/>
            </div> 
    </div>
  )
}
