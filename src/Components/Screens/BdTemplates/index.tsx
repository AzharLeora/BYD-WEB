import { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router'
import { Button, Input, Modal } from '@Components//Core'
import { BirthdayForm,Birthday001 } from '@Components//MyComponents'

const BdTemplates=()=>{
    const [isOpenModal,setIsOpenModal]=useState(false)
    const openModal=()=>setIsOpenModal(true)
    const closeModal=()=>setIsOpenModal(false)
    return(
        <>
          <div className="d-flex flex-wrap p-3 ">
           <div className="bg-imgage bg-1 m-1" onClick={()=>setIsOpenModal(true )}></div>
          
        </div>
        {isOpenModal&&
        <div className='d-flex align-items-center justify-content-center'>
            <Modal isOpen={isOpenModal} size='xl' onClose={closeModal}>
                <div className='row px-2 '>
                    <div className='col-lg-6'>
                        {/* template here */}
                       <Birthday001 />
                    </div>
                    <div className='col-lg-6'>
                {/* form */}
                <BirthdayForm />
                </div>
                </div>
            </Modal>
        </div>
        }
        </>
    )
}
export {BdTemplates}