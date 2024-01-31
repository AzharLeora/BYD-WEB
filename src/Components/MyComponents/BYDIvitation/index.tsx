import React from 'react'
import { image } from '@Assets';
import "./index.css"

function BYDIvitation() {
  return (
    <>
    <div className='d-flex justify-content-center mx-5 my-4 BYDContainer '>
      <img className='image-fluid bodyImage' src={image.bodyInvitation}/>
    </div>
    </>
  )
}

export { BYDIvitation }