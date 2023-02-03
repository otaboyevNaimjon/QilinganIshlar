import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login'
import Doctors from './Components/Doctors/Doctors';
import Doctor1 from './Components/Doctor1/Doctor1';
import About from './Components/About/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route index element={<Login />} />
        <Route path='/loginpages' element={<Login />} />
        <Route path='/' element={<App />}>
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/doctor' element={<Doctors />} />
          <Route path='/Internalmedicine/:query' element={<Doctor1 />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<Navbar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
