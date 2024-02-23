import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import ScheduleService from "./component/ScheduleService";
import AdminAccessPage from "./component/AdminAccessPage";
import CustomerAccessPage from "./component/CustomerAccessPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import { AuthProvider } from "./component/store/Auth-Context";
import ProtectedRoute from "./component/ProtectedRoute";



function App() {
   return (
      <>
         <Router>
            <AuthProvider>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/services" element={<Services />} />
               <Route path="/aboutus" element={<AboutUs />} />
               <Route path ="/scheduleservice" element = {<ScheduleService />}/>
               <Route path ="/customeraccesspage" element = {<CustomerAccessPage />}/>
               <Route path ="/adminaccesspage" element = {<AdminAccessPage />}/>
               <Route path ="/dashboard" element = {<ProtectedRoute component={Dashboard} />}/>
            </Routes>
       
            <Footer />
            </AuthProvider>
         </Router>
      </>
   );
}

export default App;
