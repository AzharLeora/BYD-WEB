import './index.css'
import { Button, Input, Modal } from '@Components'
import { WeddingForm, Wedding001 } from '@Components'
import React, {useState } from 'react';


const WedTemplates=()=>{
    const [isOpenModal,setIsOpenModal]=useState(false)
    const openModal=()=>setIsOpenModal(true)
    const closeModal=()=>setIsOpenModal(false)

  

   
    return(
        <>
        <div className="d-flex flex-wrap p-3 " >
           <div className="bg-imgage bg-1 m-1" onClick={()=>setIsOpenModal(true)}></div>
           
        </div>
        {isOpenModal&&
        <div className='d-flex align-items-center justify-content-center'>
            <Modal isOpen={isOpenModal} size='xl' onClose={closeModal}>
                <div className='row px-2'>
                    <div className='col-lg-6'>
                        <Wedding001/>
                    </div>
                    <div className='col-lg-6'>



                    {/*-------- here place the Form--------- */}
                    <WeddingForm />


                </div>
                </div>
            </Modal>
        </div>
        }
        </>
    )
}
export {WedTemplates}