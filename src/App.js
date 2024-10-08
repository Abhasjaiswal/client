import React from "react";
import Landing from "./Pages/Landing/Lading"
import Business from "./Pages/Services/Business/Business"
import AboutUs from "./Pages/AboutUs/About"
import Expertise from "./Pages/Expertise/Expertise"
import CMS from "./Pages/Expertise/CMS/CMS"
import Data from "./Pages/Expertise/Data/Data"
import Digital from "./Pages/Expertise/Digital/Digital"
import Markets from "./Pages/Expertise/Markets/Markets"
import Personalization from "./Pages/Expertise/Personalization/Personalization"
import Production from "./Pages/Expertise/Production/Production"
import ContactUs from "./Pages/Contact/Contact"
import Products from "./Pages/Products/ProductsPage"
import Concerts from "./Pages/Services/Concert/Concert"
import Service from "./Pages/Services/Services"
import Events from "./Pages/Services/Events/Events";
import School from "./Pages/Services/School/School";
import Technology from "./Pages/Services/Technology/Technology";
import Transport from "./Pages/Services/Transport/Transport";
import Health from "./Pages/Whoweserve/Health/Health";
import Multimedia from "./Pages/Whoweserve/Multimedia/Multimedia";
import NationalIdentity from "./Pages/Whoweserve/NationalIdentity/NationalIdentity";
import Payment from "./Pages/Whoweserve/Payment/Payment";
import Retail from "./Pages/Whoweserve/Retail/Retail";
import Transport1 from "./Pages/Whoweserve/Transport/Transport";
// import Wwserve from "../src/Components/Wwserve/whoweserpage"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/expertise"element={<Expertise/>}/>
          <Route path="/cms"element={<CMS/>}/>
          <Route path="/markets"element={<Markets/>}/>
          <Route path="/data"element={<Data/>}/>
          <Route path="/digital"element={<Digital/>}/>
          <Route path="/production"element={<Production/>}/>
          <Route path="/personalization"element={<Personalization/>}/>
          <Route path="/contact"element={<ContactUs/>}/>
          <Route path="/products"element={<Products/>}/>
          <Route path="/concert"element={<Concerts/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/transport" element={<Transport/>}/>
          <Route path="/school" element={<School/>}/>
          <Route path="/health" element={<Health/>}/>
          <Route path="/multimedia" element={<Multimedia/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/identity" element={<NationalIdentity/>}/>
          <Route path="/retail" element={<Retail/>}/>
          <Route path="/transport1" element={<Transport1/>}/>
          {/* <Route path="/wwserve" element={<Wwserve/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}


export default App;
