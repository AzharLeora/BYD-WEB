import { Button, Input } from "@Components//Core"



import { useState } from "react"
import './index.css'
import { Modal } from "reactstrap"

const Home=()=>{

    const [isWeding,setIsWedding]=useState(false)
    const [isBirthDay,setIsBirthDay]=useState(false)
    const [isweddingModal,setIsWeddingModal]=useState(false)
const openModal=()=>setIsWeddingModal(true)
const closeModal=()=>setIsWeddingModal(false)

    return(
        <>
          <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
             <div >
                <Button text={'Marriage'} onClick={()=>{
                    setIsWedding(true)
                    setIsBirthDay(false)
                    }}/>
                <Button text={'Birthday'} onClick={()=>{
                    setIsBirthDay(true)
                    setIsWedding(false)
                }}/>
             </div>

          </div>
             {isBirthDay&&
             <div>

             </div>
             }
             {isWeding&&
             <div className="d-flex flex-direction-row px-3 my-5">
                <div className="flower-bg mr-2" onClick={()=>setIsWeddingModal(true)
                }></div>
                <div className="flower-bg"></div>
             </div>
             }
            
            {/* {isweddingModal&&
            <div>
                <Modal title={"Wedding Details"} isOpen={isweddingModal} onClose={closeModal}>

                    <form>
                    <Input type='text' placeholder='Bride'/>
                    <Input type='text' placeholder='Groom'/>
                    <Button text={'Submit'} onClick={closeModal}/>
                    </form>
                </Modal>

               
               
            </div>
            } */}

    
        </>
    )
}
export {Home}