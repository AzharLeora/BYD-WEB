import { Countdown, WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components//MyComponents'
import './index.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { BYDInvitation } from '@Components//MyComponents/BYDInvitation'
import { useEffect, useState } from 'react'

const WedInvitation=()=>{

    useEffect(()=>{
        Aos.refresh({
            duration: 1000,
           });
    },[])

    return (
        <>
  <div data-aos="zoom-in" data-aos-once="false">

        <WeddingHeader/>
  </div>
        <div className="home-bg" >
         <div className="container">
            <div className='countdown-section pt-5' data-aos='flip-left' data-aos-once="false">
         <Countdown/>
            </div>
         <div style={{boxShadow:' rgba(0, 0, 0, 0.5) 2.4px 2.4px 3.2px'}} className='invitation-section my-5' data-aos='zoom-in-up' data-aos-once="false">
         <BYDInvitation/>
        </div>
        </div>
        <div className='timeline-section mb-5'>
        <WeddingTimeLine/>
        </div>
        <div className="container">
        <div className='footer-section'>
        <WeddingFooter/>
        </div>
        </div>

        </div>
        </>
    )
}
export {WedInvitation}