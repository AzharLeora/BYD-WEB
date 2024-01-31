import { BdTemplates, Button, Home, PageNotFound, Preview, ScreenWrapper, WedInvitation, WedTemplates  } from "@Components";
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


function App() {

  // const { language } = useSelector((state: any) => state.AuthReducer);

  // changeLanguage(language?.value);

  return (
    <ScreenWrapper>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/WeddingTemplates" element={<WedTemplates/>}/>
        <Route path="/Preview" element={<Wedding001/>}/>
        <Route path="/BirthdayTemplates" element={<BdTemplates/>}/>
      </Routes> */}
     
      <WedInvitation />
    </ScreenWrapper>

  );
}
export default App; 
