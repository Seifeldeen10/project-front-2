import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='px-4 py-2 bg-primary-500 text-primary-600'>
      <div className='container mx-auto'>
        <Link to='/' className='mr-4 hover:text-gray-800'>Home</Link>
        <Link to='/about' className='mr-4 hover:text-gray-800'>About</Link>
        <Link to='/contact' className='mr-4 hover:text-gray-800'>Contact</Link>
      </div>
    </nav>
  );
}