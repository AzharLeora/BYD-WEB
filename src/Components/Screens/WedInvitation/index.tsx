import { Button, Countdown, Modal, WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components'
import './index.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { BYDInvitation } from '@Components'
import { useEffect, useState } from 'react'
import { icons } from '@Assets'

const WedInvitation=()=>{
    const [isShowShareModal,setIsShowShareModal]=useState(false)
    const closeModal=()=> setIsShowShareModal(false)

    // useEffect(()=>{
    //     Aos.init({
    //         duration: 1000,
    //         delay:100,
    //        });
    // },[])

    return (
        <>
        <div className="home-bg" >
            {isShowShareModal&&<Modal title='Share' isOpen={isShowShareModal} onClose={closeModal}>
                      <button onClick={closeModal} className='btn btn-primary'>Close</button>
                </Modal>}
        <div className='share-button'>
            <Button variant='icon-rounded' onClick={()=>setIsShowShareModal(true)} style={{backgroundColor:'transparent',outline:'none',border:'none',position:'fixed',top:'10px',right:'10px',zIndex:'2'}} icon={icons.forward}/>
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