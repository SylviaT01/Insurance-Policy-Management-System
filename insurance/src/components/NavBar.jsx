import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    
    faTimes,
    
    faBars,
    
} from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false); 
    };

    return (
        <nav className="bg-gray-900 w-full">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-yellow-500 font-bold text-2xl">
                    Insurance<span className="text-white">Policy</span>
                </Link>

                {/* Hamburger Icon */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } absolute top-16 left-0 w-full bg-gray-900 z-50 md:static md:flex md:items-center md:justify-between md:w-auto space-x-4`}
                >
                    <div className="flex flex-col md:flex-row md:space-x-8 text-center md:items-center">
                        <Link
                            to="/"
                            className="text-white hover:text-yellow-400 py-2 md:py-0"
                            onClick={handleLinkClick}
                        
                        >
                            Home
                        </Link>
                        
                        <Link
                            to="/policies"
                            className="text-white hover:text-yellow-400 py-2 md:py-0"
                            onClick={handleLinkClick}
                        
                        >
                            Our Policies
                        </Link>
                        <Link
                            to="/add-policy"
                            className="text-white hover:text-yellow-400 py-2 md:py-0"
                            onClick={handleLinkClick}
                        
                        >
                            Add Policy
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    );
};