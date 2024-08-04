import { useState } from "react";
import { Link } from "react-router-dom";
import {  SignedIn, SignedOut,UserButton } from '@clerk/clerk-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-50 w-full">
            <nav className="h-[4rem] w-full border-b-[.1px] border-gray-600 bg-gray-900 flex justify-between items-center text-xl p-[1rem]">
                <Link to="/">
                    <div className="tracking-widest font-light w-full text-center sm:text-left pl-1 sm:pl-10 md:pl-20 lg:pl-40 bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text">
                        X-plore.
                    </div>
                </Link>

                {/* Hamburger Icon for small screens */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                        {isOpen ? (
                            // Close icon
                            <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} flex-row sm:flex-row gap-2 sm:gap-4 pr-4 sm:pr-10 md:pr-20 lg:pr-40`}>
                    <SignedOut>
                        <div className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-lg tracking-widest font-light">
                            <Link to="/sign-in">
                                <span className="border border-gray-400 rounded-[.5rem] p-2 text-xs">
                                    Login
                                </span>
                            </Link>
                        </div>

                        <div className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-lg tracking-widest font-light">
                            <Link to="/sign-up">
                                <span className="border border-gray-400 rounded-[.5rem] p-2 text-xs">
                                    SignUp
                                </span>
                            </Link>
                        </div>
                    </SignedOut>

                    <SignedIn>
                        <div className="bg-gradient-to-r from-neutral-300 to-stone-400 inline-block text-transparent bg-clip-text text-lg tracking-widest font-light">
                            <Link to="/profile">
                                <span >
                                   <UserButton showName={true}/>
                                </span>
                            </Link>
                        </div>

                       
                    </SignedIn>
                </div>
            </nav>
        </div>
    );
};
