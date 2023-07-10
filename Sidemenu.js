import React from 'react'
import { useState } from 'react';
import './Sidemenu.css'
import logo from './12.png';
import HomeIcon from '@mui/icons-material/Home';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DifferenceIcon from '@mui/icons-material/Difference';
import StarsIcon from '@mui/icons-material/Stars';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import Header from './Header';


export default function Sidemenu(props) {



    return (
       
            <div className="sidebar" >
                <img src={logo} />
                
                <div className='pages' defaultValue='#home'>
                <a href="#home"
                 ><HomeIcon /></a>
                <a href="#"><BrightnessAutoIcon/></a>
                <a href="#"><MonetizationOnIcon /></a>
                <a href="#"><TrendingUpIcon /></a>
                <a href="#"><DifferenceIcon /></a>
                <a href="#"><StarsIcon/></a>
                <a href="#"><ExitToAppIcon /></a>
                </div>
            </div>
       
    )
}

