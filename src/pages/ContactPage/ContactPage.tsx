import React from 'react';
import { CgPhone } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

export const ContactPage: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] md:px-24 md:py-12 min-phone:p-10">
      <div className="max-w-3xl text-center md:mt-12">
        <h2 className="text-3xl font-bold text-black">Contact Us</h2>
        <p className="font-light text-black">
          To make your business easier and faster, we offer you comprehensive
          solutions to automate your trading system.
        </p>
      </div>
      <div className="grid justify-center w-full mt-8 min-phone:mb-12 md:mb-0 min-phone:grid-cols-1 align-center md:grid-cols-2 min-phone:grid-rows-2">
        <div className="flex flex-col w-full">
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-[50%] min-w-[60px] h-14">
              <ImLocation />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Address</h3>
              <p>
                Parahat 7/1, Jay 25
                <br />
                Ashgabat, Turkmenistan
              </p>
            </div>
          </div>
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-[50%] min-w-[60px] h-14">
              <CgPhone />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Phone</h3>
              <a href="tel:+99364045600">
                <p>+993 64 045600</p>
              </a>
            </div>
          </div>
          <div className="relative flex px-0 py-5">
            <div className="flex flex-col flex-wrap items-center justify-center text-3xl bg-yellow-200 rounded-[50%] min-w-[60px] h-14">
              <HiOutlineMail />
            </div>
            <div className="flex flex-col ml-5 text-xl font-light text-black">
              <h3 className="font-medium text-blue-400">Email</h3>
              <a href="mailto:dowlpack@gmail.com">
                <p>dowlpack@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        {/* contactForm */}
        <div className="w-full px-5 font-serif bg-gray-100 md:py-5 min-phone:py-8 ">
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
