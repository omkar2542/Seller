import React from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import './PieChartComponent.css'


const PieChartComponent = ({ percentage ,preview }) => {
    return (
        <div className='chart'>
           <div> <div>ACOS</div>
            <div className='circle'>
                <CircularProgress
                    variant="determinate"
                    value={percentage}
                    size={200}
                    thickness={4}
                />
            </div>
            </div>
            <div className='text1'>
                <Typography variant="h6" >
                    {percentage}%
                </Typography>
                <Typography variant="h6" >
                    {preview}%
                </Typography>
            </div>
        </div>
    );
};

export default PieChartComponent;
