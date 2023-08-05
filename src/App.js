import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
function App() {
  return (
   <div className='app-container'>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
         <Footer/>
      </BrowserRouter>
   </div>
  );
}

export default App;
