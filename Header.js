import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import logo from './12.png';
import logo1 from './13.png';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import Sidemenu from './Sidemenu'
export default function Header() {
    
    return (
        <div className='header'>
           
            <div className='client-logo'>
                <Button><MenuIcon /></Button>
                <img className='logof' src={logo}></img>
                <img src={logo1}></img>
            </div>
            <div className='setting'>
                <div className='setting1'>
                    <Button >< SettingsIcon className='logo3' />Setting</Button>
                </div>
                <div className='setting2'>
                    <Button><FlagIcon/>English</Button>
                </div>
            </div>
        </div>
    )
}
