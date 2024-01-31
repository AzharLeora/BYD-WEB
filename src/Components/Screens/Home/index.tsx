import { Button} from "@Components//Core"
import './index.css'
import {useNavigate} from "react-router-dom"

const Home=()=>{
const navigate=useNavigate()

    return(
        <>
          <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
             <div >
                <Button text={'Marriage'} onClick={()=>{
                  navigate('/WeddingTemplates')
                    }}/>
                <Button text={'Birthday'} onClick={()=>{
                    navigate('/BirthdayTemplates')
                }}/>
             </div>
          </div>
        </>
    )
}
export {Home}