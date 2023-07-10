import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './Dropdown.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState();

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='drop-down'>
            <span>Displayed Currency</span>
           
                <Select className='main-drop' defaultValue={'option2'} onChange={handleChange}>
                    <MenuItem value="option1">INR<CurrencyRupeeIcon /></MenuItem>
                    <MenuItem value="option2">USD<AttachMoneyIcon /></MenuItem>
                    <MenuItem value="option3">BITCOIN<CurrencyBitcoinIcon /></MenuItem>
                </Select>
        </div>
    )
}
