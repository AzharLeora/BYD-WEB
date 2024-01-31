


import './index.css'
import { image } from '@Assets//'
import { useContext } from 'react'

const Wedding001=()=>{
      

    return(
        <>
        {/* <div className="d-flex align-items-center justify-content-center" style={{height:'100%'}}> */}
           <div className="invitation">
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='top-content my-2'>
                    <h2 className='std py-2'>Save The Date</h2>
                    <p className='h4 px-3'>WE INVITE YOU TO CELEBRATE OUR WEDDING</p>
                    </div>
                </div>
            </div>
            <div className='row d-flex  align-items-center justify-content-center'>
                <div className='center-Image mx-5 '>

                <div className='col-12 text-center center-Image'>
                   {/* <img src={image.doubleGoldenHexagone} width="100%" className='px-3' alt='bg'/> */}
                   <div className='center-content'>
                       <div><h2 className='men'>Bride</h2></div>
                       <div className='ringimage'>
                       <img src={image.couples} width={'30%'} alt='ring'/>
                       </div>
                       <div><h2 className='women'>Groom</h2></div>
                   </div>
                </div>
                </div>
            </div>
              <div className="row my-2 d-flex align-items-center justify-content-center">
               <div className='content text-center m-2'>
                  <div className='month'><h2>September</h2></div> 
                  <div className='Date'><h2>Friday / <span className='text-primary'>15</span>/ 5:00pm</h2></div> 
                  <div className='ceremony'><h3>CEREMONY.<span>Sta.Mery Church</span></h3></div>
                  <div className='reception'><h3>RECEPTION.<span>Hotel Palace</span></h3></div>
                  <div className='endlind'><h3>Allariz.<span>Ourense</span></h3></div>
               </div>
              </div>
           </div>
        {/* </div> */}
        </>
    )
}
export {Wedding001}

