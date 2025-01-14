import{BrowserRouter, Route, Routes} from "react-router-dom";
import{Home} from "./pages/Home";
import{Contact} from "./pages/Contact";
import{About} from "./pages/About";
import{Register} from "./pages/Register";
import{Login} from "./pages/Login";
import{Service} from "./pages/Service";
import { Navbar } from "./Components/Navbar";
import{Error} from "./pages/Error"
import{Logout} from "./pages/Logout"
import { Footer } from "./Components/Footer";
import { Adminlayout } from "./Components/Layout/Admin-Layout";
import { AdminUser } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Cotacts";
import { AdminUpdate } from "./pages/Admin_Update";
  
 const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/> 
      <Route path="/Register" element={<Register/>}/> 
      <Route path="/Login" element={<Login/>}/> 
      <Route path="/Logout" element={<Logout/>}/>
      <Route path="/Service" element={<Service/>}/> 
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<Adminlayout/>}>
      <Route path="users" element={<AdminUser/>}/>
      <Route path="contacts" element={<AdminContacts/>}/>
      <Route path="users/:id/edit" element={<AdminUpdate/>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
};

export default App