import React from 'react'
import Navbar from "./Navbar";
import HomeAanlytics from './homeAanlytics/HomeAanlytics';
const ArtistHome:React.FC = () => {
  return (
    <section className='container max-w-7xl mx-auto w-full'>
      <main className='flex flex-col'>
        <div>
          <Navbar />
        </div>
        <main>
          <HomeAanlytics />
        </main>
      </main>
    </section>
  );
};

export default ArtistHome;
