import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='px-4 py-8 bg-primary-500 text-primary-600'>
      <div className='container mx-auto grid grid-cols-2 gap-4'>
        <div>
          <h2 className='font-bold text-lg mb-4'>Links</h2>
          <ul className='space-y-2'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-lg mb-4'>Contact us</h2>
          <p>123 Fake St, Los Angeles, CA, 90210</p>
          <p>+1 (123) 456-7890</p>
          <p>info@ourapp.com</p>
        </div>
      </div>
    </footer>
  );
}