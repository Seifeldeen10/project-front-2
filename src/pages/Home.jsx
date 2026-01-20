import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <HeroSection />
      <div className='space-y-4'>
        <h2 className='text-3xl font-bold text-gray-600'>Features</h2>
        <p className='text-primary-600'>Our App provides amazing features</p>
      </div>
    </div>
  );
}