import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginCallbackPage from './pages/LoginCallbackPage';
import { RecoilRoot } from 'recoil';
function App() {
  return (
  <RecoilRoot>
   <div className='app-container'>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/loginCallback' element={<LoginCallbackPage/>}/>
          </Routes>
         <Footer/>
      </BrowserRouter>
   </div>
  </RecoilRoot>
  );
}

export default App;
