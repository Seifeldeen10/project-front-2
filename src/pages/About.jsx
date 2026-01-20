import React from 'react';

export default function About() {
  return (
    <div className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <h1 className='text-3xl font-bold text-gray-600'>About</h1>
      <p className='text-primary-600'>We are a tech company focused on delivering high quality products.</p>
    </div>
  );
}