<<<<<<< HEAD
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import AddInfoPage from "./pages/AddInfoPage";
import DonationPage from "./pages/DonationPage";
import ProgramPage from "./pages/ProgramPage";
import ProgramDetailPage from "./pages/ProgramDetailPage";
import MypageStudent from "./pages/MypageStudent";
import MypageCarer from "./pages/MypageCarer";
import RegisterProgramPage from "./pages/RegisterProgramPage";
import RentalHome from './pages/RentalHome';
import RentalDetail from './pages/RentalDetail';
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginCallback" element={<LoginCallbackPage />} />
          <Route path="/addInfo" element={<AddInfoPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/programDetail" element={<ProgramDetailPage />} />
          <Route path="/mypageStudent" element={<MypageStudent />} />
          <Route path="/mypageCarer" element={<MypageCarer />} />
          <Route path="/registerProgram" element={<RegisterProgramPage />} />
          <Route path='/rental' element={<RentalHome/>}/>
          <Route path='/rental/:id' element={<RentalDetail/>}/>  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
