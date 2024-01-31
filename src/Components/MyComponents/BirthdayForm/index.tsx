import {  Input,Button } from "@Components";
import { image,icons } from "@Assets"
import { Form,FormGroup} from 'reactstrap'
import { DropDown } from "@Components//Core";
import { useState } from "react";
import './style.css'
const BirthdayForm=()=>{
    const data:any=['Boy','Girl',]
    const [selected,setSelected]:any=useState('')
    const handleOnChange:any = (e:any)=>{
      const value:string = e.target.value
      console.log(value);
      
    } 
    const handleOnSubmit:any = (e:any)=>{
       e.preventDefault()
      
       const submitted = new FormData(e.target);
       const submittedValue = Object.fromEntries(submitted.entries());
       console.log(submittedValue);
       
    }
    console.log(selected);
    
    return(
        <>
        <div className="d-flex my-5 " >
            <div className="d-flex flex-column grid col-sm-3 gap-0  form-align align-items-center">
               
            <img src={icons.birthdayChild} alt="childicon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
           
            <img src={icons.birthdayAge} alt="ageicon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img2"/> */}
            <img src={icons.birthdayFather} alt="fathericon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img3"/> */}
            <img src={icons.birthdayMother} alt="mothericon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img4"/> */}
            <img src={icons.weddingLocation} alt="locationicon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img5"/> */}
            <img src={icons.birthdayCalendar} alt="calendaricon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img6"/> */}
            <img src={icons.birthdayGender} alt="gendericon"  style={{ objectFit: "contain", height: '50px', width: '50px',  }} />
            {/* <Input type = 'image' alt = "img7"/> */}

            </div>

             
                <div  className=" grid col-sm-9 gap-0  form-align">
                <Form onSubmit={handleOnSubmit}>
                
               <Input type = "text" placeholder = "name" name="name" onChange={handleOnChange} />
               <Input type = "text" placeholder = "age" name="age" onChange={handleOnChange}/>
               <Input type = "text" placeholder = "father name" name="fatherName" onChange={handleOnChange}/>
               <Input type = "text" placeholder = "mother name" name="motherName" onChange={handleOnChange}/>
               <Input type = "text" placeholder = "location" name="location" onChange={handleOnChange}/>
               <Input type = "date" placeholder = "date" name="date" onChange={handleOnChange}/>
               <DropDown placeHolder = "choose gender"  data={data}  value={selected}/>
               <Input type="submit" onSubmit={handleOnSubmit}/>
               
             
                </Form>
                </div>
          </div>
        
        </>
    )
}
export {BirthdayForm}