import { useEffect } from "react";
import { BdTemplates, Button, Home, PageNotFound, Preview, ScreenWrapper, WedInvitation, WedTemplates, WeddingFooter, WeddingHeader  } from "@Components";
import { Route, Routes } from "react-router-dom";
import { RequireAuth, RequireHome } from "@Routes";
import { useSelector } from "react-redux";
import { changeLanguage } from "@I18n";

/**
 *  select-react  - important need to add this app.js
*/

import "select2/dist/css/select2.min.css";
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"
import { Wedding001 } from "./Components/MyComponents/Invitations";
import UserLocation from "./Components/MyComponents/UserLocation";
import 'aos/dist/aos.css'
import Aos from 'aos'
import { PopEffect } from "./Components/MyComponents/Countdown/PopEffect";


// toast 


function App() {

  useEffect(()=>{
    Aos.init();
},[])


  // const { language } = useSelector((state: any) => state.AuthReducer);

  // changeLanguage(language?.value);

  return (
    <ScreenWrapper>   
      <WedInvitation />
      {/* <PopEffect/> */}
    </ScreenWrapper>
  );
}
export default App; 
