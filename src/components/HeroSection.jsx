import React from 'react';

export default function HeroSection() {
  return (
    <section className='py-20 bg-primary-500 text-primary-600 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Welcome to Our App</h1>
      <p className='mb-8'>Delivering high quality products for you</p>
      <button className='px-4 py-2 bg-white text-black rounded hover:bg-gray-200'>Get Started</button>
    </section>
  );
}