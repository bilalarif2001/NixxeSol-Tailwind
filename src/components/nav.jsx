import React from "react";
import logo from "../assets/logo.png";
import downarrow from '../Svgs/downarrow.svg'

function Nav() {
  return (
    <div className="container mx-auto relative">
      <nav className=" p-10 flex items-center justify-between">
        <div>
          <img src={logo} />
        </div>
        <div className="fixed z-50 lg:right-[69px] 2xl:right-[170px] bg-gray-50 bg-opacity-50 backdrop-blur-lg p-2 rounded-xl">
          <ul className="flex space-x-10 font-Proxima">
            <button>About</button>
            <button className="flex items-center space-x-1">
              <p>IT services</p>
              <div className="p-[5px] rounded-full bg-[#E92129]">
                <img src={downarrow} className="w-2 h-2"/>
              </div>
            </button>
            <button>Portfolio</button>
            <button className="bg-[#E92129] rounded-2xl p-4 px-10 text-white text-lg">Contact Us</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
