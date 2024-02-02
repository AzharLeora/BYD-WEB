import { Countdown, WeddingFooter, WeddingHeader, WeddingTimeLine } from '@Components//MyComponents'
import './index.css'
import { BYDIvitation } from '@Components//MyComponents/BYDIvitation'

const WedInvitation=()=>{
    return (
        <>
        <WeddingHeader/>
        <Countdown/>
        <BYDIvitation/>
        <WeddingTimeLine/>
        <WeddingFooter/>
        </>
    )
}
export {WedInvitation}