import React from 'react';
import AvatarStack from '../components/AvatarStack';

function Home() {
  return (
    <div className="font-sf h-screen flex items-center justify-between px-8">
      <div className="max-w-4xl p-6">
        <h1 className="text-8xl font-medium mb-4">Develops systems <br /> with precision and honed expertise.</h1>

        <p className="text-lg italic text-gray-600">
          Doryoku wa kesshite anata o uragirimasen.
        </p>
        <AvatarStack />

      </div>

      <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center border">
        {/* Replace this div with your actual image */}
        <img 
          src="/path/to/your/image.jpg" 
          alt="Alistair Jan" 
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default Home;
