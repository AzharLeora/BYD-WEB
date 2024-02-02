import { Countdown, WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components//MyComponents'
import './index.css'
import { BYDIvitation } from '@Components//MyComponents/BYDIvitation'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

const WedInvitation=()=>{


    return (
        <>

        <WeddingHeader/>
        <div className="home-bg">

        <div className="container">
        <Countdown/>
        </div>
        <div className="container">
        <BYDIvitation/>
        </div>
        <WeddingTimeLine/>
        <div className="container">
        <WeddingFooter/>
        </div>
        </div>
        </>
    )
}
export {WedInvitation}