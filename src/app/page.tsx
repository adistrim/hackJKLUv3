import React from 'react';
import Header from './components/header';
import Image from 'next/image';
import HomeComponent from './components/home';

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/bg.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-25"
        />
      </div>

      <HomeComponent />

      
    </div>
  );
};

export default Home;
