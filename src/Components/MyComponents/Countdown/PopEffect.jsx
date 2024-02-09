import {useState} from 'react'
import Confetti from "react-confetti"
import './PopEffect.css'

const  PopEffect =()=>{
    const [count,setCount] = useState(0)

    return(
        <>
         <Confetti/>
         <div> Happy wedding</div>
        </>
       
    )
}
export {PopEffect}