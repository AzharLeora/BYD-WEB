import { WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components//MyComponents'
import './index.css'
import { BYDIvitation } from '@Components//MyComponents/BYDIvitation'

const WedInvitation=()=>{
    return (
        <>
        <h1>Wed Invitation</h1>
        <WeddingHeader/>
        <BYDIvitation/>
        <WeddingTimeLine/>
        <WeddingFooter/>
        </>
    )
}
export {WedInvitation}