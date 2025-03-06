import React from 'react';
import { Card } from 'flowbite-react';

const Testimonial = ({ image, name, text }) => {
  return (
    <Card className="flex flex-col items-center p-4 w-80 h-auto rounded-lg shadow-2xl">
      <div className="flex justify-center w-full">
        <img src={image} alt="Testimonial" className="w-24 h-24 rounded-lg object-cover mb-4 border-4 border-orange-500" /> {/* Add border-4 and border-orange-500 for orange border */}
      </div>
      <p className="text-center font-bold text-orange-500">{name}</p>
      <p className="text-center">{text}</p>
    </Card>
  );
};

export default Testimonial;