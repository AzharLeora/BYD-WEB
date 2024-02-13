import { Button, Countdown, Modal, WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components'
import './index.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { BYDInvitation } from '@Components'
import { useEffect, useState } from 'react'
import { icons } from '@Assets'
import SharePage from '@Components//MyComponents/ShareURL'

const WedInvitation=()=>{

    // useEffect(()=>{
    //     Aos.init({
    //         duration: 1000,
    //         delay:100,
    //        });
    // },[])

    return (
        <>
        <div className="home-bg" >

          
        <div className='share-button'>
            <SharePage />
        </div>
  <div >

        <WeddingHeader/>
  </div>
         <div className="container">
            <div className='countdown-section pt-5 d-flex flex-column align-items-center justify-content-center'>
         <Countdown/>
            </div>
         <div  className='invitation-section my-5 d-flex justify-content-center align-items-center'>
         <BYDInvitation/>
        </div>
        </div>
        <div className='timeline-section mb-5'>
        <WeddingTimeLine/>
        </div>
        <div className='footer-section'>
        <WeddingFooter/>
        </div>

        </div>
        </>
    )
}
export {WedInvitation}