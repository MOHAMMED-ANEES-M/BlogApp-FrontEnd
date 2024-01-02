import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/User/Home';
import Profile from './components/User/Profile';
import Write from './components/User/Write';
import About from './components/User/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProfile from './components/User/UpdateProfile';
import ViewBlog from './components/User/ViewBlog';
import HomeAdmin from './components/Admin/HomeAdmin';
import ProfileAdmin from './components/Admin/ProfileAdmin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/updateprofile/:id" element={<UpdateProfile/>} />
          <Route path="/viewblog/:id" element={<ViewBlog/>} />
          <Route path="/homeadmin" element={<HomeAdmin/>} />
          <Route path="/profileadmin" element={<ProfileAdmin/>} />
        </Route>
      </Routes>
    </BrowserRouter> 

    {/* <LandingPage/> */}
  </React.StrictMode>
);

reportWebVitals();
