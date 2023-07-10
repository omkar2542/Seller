import React, { useState } from 'react'
import Sidemenu from './Sidemenu'
import Header from './Header'
import './Main.css'
import Subheader from './Subheader'
import MainPage from './MainPage'
import { Routes, Route, useSearchParams } from "react-router-dom";
import PieChartComponent from './PieChartComponent '
import SubValues from './SubValues'
import FirstPage from './FirstPage'
import { Button } from '@mui/material'




export default function Main() {

    return (

        <div className="main" >
            <Sidemenu />
            <div className='page'>
                <Header />
                <Subheader />
                <div className='main-page'>
                    <MainPage />


                </div>
                <Routes>

                    <Route

                        exact

                        path="/"



                        element={<MainPage />}

                    ></Route>


                    <Route exact path="/programs" element={<FirstPage />}></Route>



                </Routes>

            </div>
        </div>

    )
}
