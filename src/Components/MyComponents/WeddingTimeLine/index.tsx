import UserLocation from '../UserLocation';
import './index.css';
import { image } from '@Assets';


const WeddingTimeLine=()=>{
    return(
        <>
        <div className="timeline-bg">

        <div className=" container  ">
           <div className="row">
            <div className="col-12">
  
              {/* title */}
              <div className="title-section row">
  
                <div className="col-2 col-md-3 pr-0">
                  <div className='d-none d-lg-block'>
                  <hr></hr>
                  </div>
                </div>
                <div className="col-8 col-md-6 d-flex align-items-center justify-content-center text-center"><div className='title'>Our Dream Day's Timeline</div></div>
                <div className="col-2 col-md-3 pl-0">
                <div className='d-none d-lg-block'>
                  <hr></hr>
                  </div>
                </div>
  
              </div>
  
            </div>
  
            {/* heart decoration */}
            <div className="col-12 text-center">
              <img src={image.handHeart} width={'50px'} alt="Heart"/>
            </div>
  
            <div className="col-12">
  
              {/* harizontal align */}
            <div className=" row">
                <div className="col-md-2" ></div>
                <div className="col-4 col-md-2  col-lg-3 pr-0 "><hr></hr></div>
                <div className="col-4  col-md-4 col-lg-2 d-flex flex-nowrap align-items-center justify-content-center text-center"><span className="event-date">10<sup>th</sup> Feb</span></div>
                <div className="col-4 col-md-2 col-lg-3 pl-0 "><hr></hr></div>
                <div className="col-md-2 "></div>
              </div>
            </div>
           </div>
           
  {/* reception Row */}
  
           <div className="row reception">
             <div className="col-6 d-flex align-items-center justify-content-center" style={{borderRight:'1px solid #ce3e7a'}}>
              <div className="caricature-box d-flex align-items-center justify-content-center">
                <img src={image.couples}  alt="Couples"/>
              </div>
             </div>
             <div className="col-6 d-flex align-items-center justify-content-center " style={{borderLeft:'1px solid #ce3e7a',width:'100%'}}>
              <div className="content-box d-flex align-items-center justify-content-center  ">
                <div className="spacing">
                <div className="event">Reception</div>
                <div className="timing mb-4">STARTS AT 06:30 PM</div>
                <div className="Quote text-center text-md-left">"Its our pleasure to invite you all to be part of our special day."</div>
                </div>
              </div>
             </div>
           </div>
  
  {/* heart decoration */}
           <div className="col-12 text-center">
              <img src={image.handHeart} width={'50px'} alt="Heart"/>
            </div>
  
  {/* harizontal align */}
            <div className=" row">
                <div className="col-md-2" ></div>
                <div className="col-4 col-md-2 col-lg-3  pr-0 "><hr></hr></div>
                <div className="col-4 col-md-4 col-lg-2 d-flex align-items-center justify-content-center text-center"><span className="event-date">11<sup>th</sup> Feb</span></div>
                <div className="col-4 col-md-2 col-lg-3  pl-0 "><hr></hr></div>
                <div className="col-md-2 "></div>
              </div>
  
  {/* Marriage row */}
  
            <div className="row marriage">
             <div className="col-6 d-flex align-items-center justify-content-center" style={{borderRight:'1px solid #ce3e7a'}}>
              <div className="content-box d-flex align-items-center justify-content-center  ">
                <div className="spacing text-right">
                <div className="event">Marriage</div>
                <div className="timing mb-4">STARTS AT 10:00 AM</div>
                <div className="Quote text-center text-md-right">"We would eagerly await your kind presence at the wedding celebration."</div>
                </div>
              </div>
             </div>
             <div className="col-6 d-flex align-items-center justify-content-center " style={{borderLeft:'1px solid #ce3e7a',width:'100%'}}>
              <div className="caricature-box d-flex align-items-center justify-content-center">
                <img src={image.traditional}  alt="Couples"/>
              </div>
             </div>
  
           </div>
  
  {/* love birds */}
             <div className=" row">
                <div className="col-5  pr-0 "><hr></hr></div>
                <div className="col-2 d-flex align-items-center justify-content-center text-center px-0"><img src={image.loveBirds} width={'30px'} alt="Love Birds"/></div>
                <div className="col-5  pl-0 "><hr></hr></div>             
              </div>
  
              {/* Venue row */}
  
              <div className="row venue">
             <div className="col-6 d-flex align-items-center justify-content-center" style={{borderRight:'1px solid #ce3e7a'}}>
              <div className="caricature-box d-flex align-items-center justify-content-center">
                {/* <img src={image.couples}  alt="Couples"/> */}
                <UserLocation/>
              </div>
             </div>
             <div className="col-6 d-flex align-items-center justify-content-center " style={{borderLeft:'1px solid #ce3e7a',width:'100%'}}>
              <div className="content-box d-flex align-items-center justify-content-center  ">
                <div className="spacing">
                <div className="event">Venue</div>
                <div className="place mb-4">KBS SREE CONVENTION CENTRE,</div>
                <div className="address text-center text-md-left">ECR Road (Near Shivaji Statue),Puducherry-605008</div>
                </div>
              </div>
             </div>
           </div>
  
  {/* heart decoration */}
           <div className="col-12 text-center">
              <img src={image.handHeart} width={'50px'} alt="Heart"/>
            </div>
        </div>
        </div>
      </>
    )
}
export {WeddingTimeLine}