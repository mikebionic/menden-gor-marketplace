import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

export const ContactPage: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-24 py-12">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-medium text-black">Contact Us</h2>
        <p className="font-light text-black">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
          officia blanditiis perspiciatis voluptatum debitis, tempore sapiente
          commodi soluta impedit.
        </p>
      </div>
      <div className="flex justify-center w-full mt-8 align-center">
        <div className="flex flex-col w-1/2">
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-semifull min-w-60 h-14">
              <ImLocation />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Address</h3>
              <p>
                4671 Sugar Camp Road, <br />
                Owatonna,Minnesota,
                <br />
                55060
              </p>
            </div>
          </div>
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-semifull min-w-60 h-14">
              <CgPhone />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Phone</h3>
              <p>507-475-6094</p>
            </div>
          </div>
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-semifull min-w-60 h-14">
              <HiOutlineMail />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Email</h3>
              <p>dowlpack@gmail.com</p>
            </div>
          </div>
        </div>
        {/* contactForm */}
        <div className="w-2/5 px-5 py-5 font-serif bg-gray-100">
          <form action="">
            <h2 className="text-3xl font-normal">Send Message</h2>
            <div className="relative w-full mt-2 inputbox">
              <input
                className="w-full px-0 py-1 mx-0 my-2 text-base bg-gray-100 border-t-0 border-b-2 border-l-0 border-r-0 border-gray-600 outline-none resize-none active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                type="text"
                required={true}
              />
              <span className="absolute left-0 px-0 py-1 mx-0 my-2 text-base text-gray-600 transition-all duration-500 pointer-events-none">
                Full Name
              </span>
            </div>
            <div className="relative w-full mt-2 inputbox">
              <input
                className="w-full px-0 py-1 mx-0 my-2 text-base bg-gray-100 border-t-0 border-b-2 border-l-0 border-r-0 border-gray-600 outline-none resize-none active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                type="text"
                required={true}
              />
              <span className="absolute left-0 px-0 py-1 mx-0 my-2 text-base text-gray-600 transition-all duration-500 pointer-events-none">
                Email
              </span>
            </div>
            <div className="relative w-full mt-2 inputbox">
              <textarea
                className="w-full px-0 py-1 mx-0 my-2 text-base bg-gray-100 border-t-0 border-b-2 border-l-0 border-r-0 border-gray-600 outline-none resize-none active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                required={true}
              ></textarea>
              <span className="absolute left-0 px-0 py-1 mx-0 my-2 text-base text-gray-600 transition-all duration-500 pointer-events-none">
                Type your Message...
              </span>
            </div>
            <div className="relative w-full mt-2">
              <input
                className="w-24 px-2 py-2 text-lg text-white bg-blue-600 border-none outline-none cursor-pointer resize-none active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                type="submit"
                required={true}
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
