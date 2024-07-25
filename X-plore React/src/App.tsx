import { SignIn, SignUp } from '@clerk/clerk-react';
import './App.css';

import { Navbar } from './@/components/magicui/Navbar';
import img from './assets/beams-basic-transparent.png';
import Quote from './@/components/magicui/Quote';
import Footer from './@/components/magicui/Footer';
import Globe from './@/components/magicui/globe';
import Particles from './@/components/magicui/particles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './@/components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div
        className="h-screen w-screen overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(360deg)',
        }}
      >
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Globe />
                <Quote />
                <Particles />
               
              </>
            }
          />
          <Route path="/sign-in" element={
            <div className='h-screen flex justify-center mt-[5rem]'>

              <SignIn  fallbackRedirectUrl={"/dashboard"} />
            </div>
            } />
          <Route path="/sign-up" element={
                        <div className='h-screen flex justify-center mt-[3rem]'>

            <SignUp fallbackRedirectUrl={"/dashboard"}/>
            </div>} />
          <Route path="/dashboard" element={
                        <div className='h-screen flex justify-center mt-[3rem]'>

            <Dashboard/>
            </div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
