import {  Form, Input } from "reactstrap"
import {Button } from '@Components'
import './StyleWedform.css'
import { image,icons } from "@Assets"
import React from 'react'
const weddingFormData:any=React.createContext
const WeddingForm=()=>{
    const bsSize:any='sm'
    const handleOnSubmit:any=(e:any)=>{
        e.preventDefault()
      
        const submitted = new FormData(e.target);
        const submittedValue = Object.fromEntries(submitted.entries());
        console.log(submittedValue);
    }
    const handleOnChange:any=(e:any)=>{
       console.log(e.target.value);
       
    }
    return(
       <Form onSubmit={handleOnSubmit}> 
       <div  className="grid form-row-gap my-4 ">
        
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingBride} alt="bride"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "Groom name" onChange={handleOnChange} />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingGroom} alt="groom"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "Bride name" onChange={handleOnChange} />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingCalendar} alt="date"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "date" placeholder = "Big Day" onChange={handleOnChange}  />  
       <div className=" d-flex justify-content-center">  
       <img src={icons.weddingGroom} alt="time"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div> 
       <Input bsSize={bsSize} type = "time" placeholder = "Time" onChange={handleOnChange}  />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingLocation} alt="locationicon"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "location" onChange={handleOnChange} />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingSlogan} alt="sloganicon"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "Slogan" onChange={handleOnChange}  />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingGroom} alt="contacticon"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "contact" onChange={handleOnChange}  />
       <div className=" d-flex justify-content-center">
       <img src={icons.weddingGroom} alt="subDomainicon"  style={{ objectFit: "contain", height: '2rem', width: '2rem',  }} />
       </div>
       <Input bsSize={bsSize} type = "text" placeholder = "Your Sub domain" onChange={handleOnChange}  />
     
        </div>
        <div className="d-flex justify-content-center">
       <Button type="submit" text={'submit'} />
       </div>
        
        </Form>
    )
}
export {WeddingForm}