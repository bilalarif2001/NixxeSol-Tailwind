import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav";
import illustration from "./assets/illustration.png";
import ellipse1 from "./assets/Ellipse-1.png";
import ellipse2 from "./assets/Ellipse-2.png";
import photo from "./assets/photo.png";
import Card from "./components/card";
import Companies from "./components/companies";
import Companies2 from "./components/companies2";
import rightarrow from "./Svgs/rightArrow.svg";
import games from "./assets/games.png";
import leftarrowbig from "./Svgs/leftarrowbig.svg";
import rightarrowbig from "./Svgs/rightarrowbig.svg";
import footerlogo from "./assets/footer-logo.png";
import phonelogo from "./Svgs/phonelogo.svg";
import locationlogo from "./Svgs/location-logo.svg";
import emaillogo from "./Svgs/emaillogo.svg";
import facebooklogo from './Svgs/facebook.svg'
import instagramlogo from './Svgs/instagram.svg'
import twitterlogo from './Svgs/twitter.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="h-[5000px]">
      {/* --------------- Nav Section --------------- */}
      <Navbar />

      {/* --------------- Section 1  --------------- */}
      <div className="container mx-auto mb-28">
        {/* Title and Image */}
        <div className="mt-20 px-10 flex items-center justify-between">
          <div className="font-Proximabold">
            <h1 className="text-transparent font-bold h-[110px] text-[80px] bg-clip-text bg-gradient-to-r from-black to-red-500">
              Bridging the
            </h1>
            <h1 className="text-transparent font-bold h-[110px] text-[80px] bg-clip-text bg-gradient-to-r from-black -mt-6 via-red-800 to-red-500">
              gap between
            </h1>
            <h1 className="text-transparent font-bold h-[112px] text-[80px] bg-clip-text bg-gradient-to-r from-black -mt-6 via-red-700 to-red-500">
              ideas and
            </h1>
            <h1 className="text-transparent font-bold h-[110px] text-[80px] bg-clip-text bg-gradient-to-r from-black -mt-6 via-red-500 to-red-500">
              reality
            </h1>
          </div>
          <div>
            <img src={illustration} />
          </div>
        </div>
        {/* About Company  */}
        <div className="mt-20 px-10 flex items-center justify-between space-x-52">
          <div className="text-7xl font-Proximabold">
            <h1>About</h1>
            <h1>Company</h1>
          </div>

          <div className="w-full max-w-2xl">
            <h2 className="max-w-xl text-3xl font-Proxima mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              et similique
            </h2>
            <p className="max-w-2xl mb-6 font-Proxima text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              aspernatur tempora minus molestiae quidem dolor repudiandae
              distinctio sint ipsam? Omnis animi placeat impedit! Totam
              architecto nemo quo reiciendis vel porro!
            </p>

            <div className="flex items-center justify-between max-w-xl">
              {/* Happy clients */}
              <div className="font-Proxima">
                <div className="flex font-bold text-5xl">
                  <p>100</p>
                  <p className="text-[#E4252C]">+</p>
                </div>
                <p className="-mt-2 font-Proxima text-[16px]">Happy Clients</p>
              </div>
              {/* Years in business */}
              <div className="font-Proxima">
                <div className="flex font-bold text-5xl">
                  <p>05</p>
                  <p className="text-[#E4252C]">+</p>
                </div>
                <p className="-mt-2 font-Proxima text-[16px]">
                  Years in business
                </p>
              </div>
              {/* Total Members */}
              <div className="font-Proxima">
                <div className="flex font-bold text-5xl">
                  <p>50</p>
                  <p className="text-[#E4252C]">+</p>
                </div>
                <p className="-mt-2 font-Proxima text-[16px]">Total Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- Section 2 --------------- */}
      <div className="bg-black bg-opacity-95 p-32 relative">
        <div className="absolute left-0 top-0">
          <img src={ellipse1} className="w-[450px] h[0px] max-w-full" />
        </div>
        <div className="absolute right-0 top-0">
          <img src={ellipse2} className="w-[700px]" />
        </div>

        <h1 className="text-red-500 text-center -mt-20 text-7xl font-Proximabold">
          Services
        </h1>
      </div>
      {/* Cards */}
      <div className="-mt-16 container mx-auto">
        <div className="grid grid-cols-4 gap-y-8 relative mb-52">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* Portfolio  */}
      <div className="mb-52 ">
        <div className="flex items-center space-x-10 relative">
          <div className="pt-24 mx-auto container">
            <h1 className="font-Proximabold text-7xl mb-2">Portfolio</h1>
            <p className="max-w-xl font-Proxima mb-6 pr-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium ab similique.
            </p>

            <button className="bg-[#E92129] text-white font-Proxima p-4 py-3 rounded-xl w-44 flex items-center space-x-2 justify-center">
              <p>More Portfolio</p>
              <img src={rightarrow} />
            </button>
          </div>
          <div className="w-full absolute right-0 2xl:max-w-6xl lg:max-w-4xl ml-20 ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={games} />
              </SwiperSlide>
            </Swiper>
            <div className="ml-[45%] mt-5">
              <button className="bg-[#E92129] rounded-full p-4 mr-6">
                <img src={leftarrowbig} />
              </button>
              <button className="bg-[#E92129] rounded-full p-4 mr-6">
                <img src={rightarrowbig} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Section 3 --------  */}
      {/* Companies */}
      <Companies />

      {/* ----- Section 4 -------- */}
      {/* Testimonials */}
      <div className="mb-52 ">
        <div className="flex items-center space-x-10 relative">
          <div className=" mx-auto container">
            <h1 className="font-Proximabold text-7xl mb-2">Testimonials</h1>
            <p className="max-w-xl font-Proxima mb-6 pr-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium ab similique.
            </p>

            <button className="bg-[#E92129] text-white font-Proxima p-4 py-3 rounded-xl w-44 flex items-center space-x-2 justify-center">
              <p>Explore More</p>
              <img src={rightarrow} />
            </button>
          </div>
          <div className="w-full absolute top-0 right-0 2xl:max-w-6xl lg:max-w-4xl ml-20 ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white shadow-xl p-4 flex space-x-3">
                  <div>
                    <img src={photo} className="w-64" />
                  </div>
                  <div>
                    <h1 className="text-[#E4252C] font-Proximabold text-4xl mb-4">
                      Adam Smith
                    </h1>
                    <p className="font-Proxima">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Imperdiet proin ut urna sit. Varius sed euismod at est,
                      commodo sociis dolor. Elit, suspendisse leo id in eu ut
                      arcu, malesuada. Nibh suspendisse mauris amet, facilisi.
                      Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh
                      suspendisse mauris amet, facilisi Nibh suspendisse mauris
                      amet, facilisi. Elit, suspendisse leo id in eu ut arcu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow-xl p-4 flex space-x-3">
                  <div>
                    <img src={photo} className="w-64" />
                  </div>
                  <div>
                    <h1 className="text-[#E4252C] font-Proximabold text-4xl mb-4">
                      Adam Smith
                    </h1>
                    <p className="font-Proxima">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Imperdiet proin ut urna sit. Varius sed euismod at est,
                      commodo sociis dolor. Elit, suspendisse leo id in eu ut
                      arcu, malesuada. Nibh suspendisse mauris amet, facilisi.
                      Elit, suspendisse leo id in eu ut arcu, malesuada. Nibh
                      suspendisse mauris amet, facilisi Nibh suspendisse mauris
                      amet, facilisi. Elit, suspendisse leo id in eu ut arcu.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="ml-[45%] mt-5">
              <button className="bg-[#E92129] rounded-full p-4 mr-6">
                <img src={leftarrowbig} />
              </button>
              <button className="bg-[#E92129] rounded-full p-4 mr-6">
                <img src={rightarrowbig} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----- Section 5 ------- */}
      {/*  Feedback Section */}
      <div className="bg-black p-10 relative">
        <div className="absolute right-0 top-0">
          <img src={ellipse2} className="w-[1200px]" />
        </div>
        <div className="flex items-center justify-between container mx-auto">
          <div className="text-white w-full">
            <p className="font-Proxima pb-4 pt-12 text-zinc-400">
              Testimonials __________
            </p>
            <h1 className="font-Proximabold text-7xl max-w-2xl mb-10">
              Book a meeting with us
            </h1>
            <p className="font-Proxima max-w-lg text-zinc-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam numquam dolorum vel reprehenderit alias magni earum
              aliquid non odio. Esse tempore accusantium consectetur quia eum
              adipisci modi reprehenderit, distinctio ex.
            </p>
          </div>
          <div className="flex flex-col space-y-4 w-full max-w-xl">
            <input
              placeholder="Name"
              className="bg-transparent border border-white p-2 max-w-xl"
            />
            <input
              placeholder="Email"
              className="bg-transparent border border-white p-2 max-w-xl"
            />
            <input
              placeholder="Phone (Optional)"
              className="bg-transparent border border-white p-2 max-w-xl"
            />
            <textarea
              placeholder="Tell us about the project you are working on (Optional)"
              className="bg-transparent border border-white p-2 max-w-xl"
            />

            <button className="bg-[#E4252C] p-4 w-40 mx-auto text-white font-Proxima font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* ----- Section 6 ------- */}
      {/* Company Section 2 */}
      <Companies2 />

      {/* ----- Section 7 ------- */}
      {/* Footer Section */}

      <div>
        <div className="bg-black text-white relative p-40">
          <img src={footerlogo} className="-mt-10 absolute -top-10 left-0" />
          <div className="flex items-center justify-between space-x-6 container mx-auto">
            {/* phone section */}
            <div className="w-full max-w-lg">
              <div className="flex space-x-4 mb-8">
                <img src={phonelogo} />
                <p className="text-xl font-Proxima">+92 300 1234567</p>
              </div>
              <div className="flex space-x-4 mb-8">
                <img src={emaillogo} />
                <p className="text-xl font-Proxima">info@nixxsol.com</p>
              </div>
              <div className="flex space-x-4 mb-8">
                <img src={locationlogo} />
                <p className="text-xl font-Proxima max-w-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos obcaecati
                </p>
              </div>
            </div>

            {/* Email Section */}

            <div className="w-full">
              <ul className="flex text-white items-center justify-between font-Proxima text-xl mb-8">
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact us</li>
              </ul>
              <h1 className="font-Proximabold text-[31px] mb-4">
                Stay in Connection
              </h1>
              <div className="flex bg-[#272727]">
                <input
                  className="bg-[#272727] placeholder:text-[#5F5F5F] w-full p-2"
                  placeholder="Email Address"
                />
                <button className="bg-[#E92129] font-Proxima m-2 rounded-sm w-52 p-2">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Red Footer Section */}
        <div className="bg-[#E4252C] text-white font-Proxima p-10">
        <div className="container mx-auto flex items-center justify-between">
        <div><p className="text-xl">© 2022 Nixxsol All Rights Reserved.</p></div>
        <div className="flex space-x-6">
        <img src={facebooklogo}/>
        <img src={instagramlogo}/>
        <img src={twitterlogo}/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
