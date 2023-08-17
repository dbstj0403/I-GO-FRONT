import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginCallbackPage from './pages/LoginCallbackPage';
import AddInfoPage from './pages/AddInfoPage';
import DonationPage from './pages/DonationPage';
import ProgramPage from './pages/ProgramPage';
function App() {
  return (
   <div className='app-container'>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/loginCallback' element={<LoginCallbackPage/>}/>
            <Route path='/addInfo' element={<AddInfoPage/>}/>
            <Route path='/donation' element={<DonationPage/>}/>
            <Route path='program' element={<ProgramPage/>}/>
          </Routes>
         <Footer/>
      </BrowserRouter>
   </div>
  );
}

export default App;
