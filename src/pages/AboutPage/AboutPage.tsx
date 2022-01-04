import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full px-0 py-16">
      <div className="grid items-center justify-around w-full mx-auto my-8 grid-cols-about max-w-95">
        <img
          className="h-auto col-start-1 col-end-2 mx-auto my-0 gap-x-2 w-96"
          src="https://cdn.pixabay.com/photo/2021/02/14/11/41/monkeys-6014204_1280.jpg"
          alt=""
        />
        <div className="w-auto px-8 py-0 mx-auto my-0 font-serif">
          <h1 className="mb-5 text-black capitalize text-7xl">About us</h1>
          <h5 className="mb-6 text-2xl tracking-wider text-black capitalize">
            Marketplace
          </h5>
          <p className="mb-12 text-lg leading-7 tracking-wider text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            aut minima? Nostrum nobis perferendis qui at. Quia, suscipit quidem
            perspiciatis totam incidunt optio recusandae ad quo voluptate porro,
            numquam, consequuntur ex voluptas culpa placeat excepturi voluptates
            sint ipsum esse soluta nulla velit! Eos non eum expedita vitae
            labore explicabo, tenetur necessitatibus accusantium ducimus quasi
            neque hic ut libero nihil soluta?
          </p>
          <button
            type="button"
            className="px-8 py-3 font-bold text-black transition-all border-2 border-transparent border-solid cursor-pointer delay-400 bg-firstColorLight rounded-3xl hover:bg-transparent hover:border-firstColorLight"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};
