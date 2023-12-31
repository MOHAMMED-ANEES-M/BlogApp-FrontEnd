import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Write from './components/Write';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UpdateProfile from './components/UpdateProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/updateprofile/:id" element={<UpdateProfile/>} />
        </Route>
      </Routes>
    </BrowserRouter> 

    {/* <LandingPage/> */}
  </React.StrictMode>
);

reportWebVitals();
