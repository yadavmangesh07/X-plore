import  { useEffect } from 'react';
import { SignIn, SignUp, useClerk } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './@/components/magicui/Navbar';
import img from './assets/beams-basic-transparent.png';
import Quote from './@/components/magicui/Quote';
import Footer from './@/components/magicui/Footer';
import Globe from './@/components/magicui/globe';
import Particles from './@/components/magicui/particles';
import SearchBar from './@/components/magicui/SearchBar'; 
import Response from './@/components/Responses';
import SearchHistory from './@/components/SearchHistory';

function App() {
  const { signOut } = useClerk();

  useEffect(() => {
    // Logic to determine if the user should be signed out
    const handleServerRestart = () => {
      // Example: Clear session on server restart
      signOut();
    };

    // Call the function to handle the session on app load
    handleServerRestart();

    // Optional: Add any other logic or cleanup if needed
  }, [signOut]);

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
          {/* clerk */}
          <Route
            path="/sign-in"
            element={
              <div className='h-screen flex justify-center mt-[3rem] lg:mt-[5rem]'>
                <SignIn fallbackRedirectUrl={"/"} />
              </div>
            }
          />
          <Route
            path="/sign-up"
            element={
              <div className='h-screen flex justify-center mt-[1rem] lg:mt-[2rem]'>
                <SignUp fallbackRedirectUrl={"/"} />
              </div>
            }
          />
          
          <Route
            path="/search"
            element={
              <div className='h-screen flex justify-center mt-[3rem]'>
                <SearchBar />
              </div>
            }
          />
          <Route
            path="/search-results"
            element={
              <div className='h-screen flex justify-center mt-[3rem]'>
                <Response />
              </div>
            }
          />
         <Route
            path="/search-history"
            element={
              <div className='h-screen flex justify-center mt-[3rem]'>
                <SearchHistory />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
