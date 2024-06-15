import "./App.css";
// import Porfile from "./assets/Photo.png";
import Porfile from "./assets/pro1.gif";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import React from "./assets/react.png";
import Js from "./assets/javascript.png";
import Node from "./assets/nodejs.png";
import Express from "./assets/express.png";
import Typescript from "./assets/typescript.png";
import Codeigniter from "./assets/codeigniter.png";
import Mysql from "./assets/mysql.png";
import Mongodb from "./assets/mongodb.png";
import Redux from "./assets/redux.png";

import Bootstrap from "./assets/bootstrap.png";
import Electron from "./assets/electron.svg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Mandal from "./components/modal/Mandal";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Dilip Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Dilip Suthar,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Full Stack Developer
                </h2>
              </div>
              <div>
                <p className="my-10 text-gray-400">
                  A Full Stack Developer builds complete web applications,
                  handling front-end, back-end, and database management for
                  seamless functionality.
                </p>
                <button className="px-8 shadow-gray-500 shadow-md py-3 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative w-full">
              <Mandal />
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col mt-11">
              <div className="border border-gray-500 rounded-md p-5 mb-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <img src={Project1} className="h-[200px] w-[350px]" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-semibold mt-8 lg:mt-0">
                    Boutique Management System
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    To streamline cricket tournament registration processes,
                    ensuring seamless user management and team viewing
                    functionality.
                  </p>
                  <div className="flex mt-auto mb-0 gap-2">
                    <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 mb-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <img src={Project2} className="h-[200px] w-[350px]" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-semibold mt-8 lg:mt-0">
                    VPL - Cricket Tournament
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    To streamline cricket tournament registration processes,
                    ensuring seamless user management and team viewing
                    functionality.
                  </p>
                  <div className="flex mt-auto mb-0 gap-2">
                    <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 mb-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <img src={Project3} className="h-[200px] w-[350px]" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-semibold mt-8 lg:mt-0">
                    Electric Vehicles
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    To streamline cricket tournament registration processes,
                    ensuring seamless user management and team viewing
                    functionality.
                  </p>
                  <div className="flex mt-auto mb-0 gap-2">
                    <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 mb-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <img src={Project4} className="h-[200px] w-[350px]" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-semibold mt-8 lg:mt-0">
                    Portfolio Website
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    To streamline cricket tournament registration processes,
                    ensuring seamless user management and team viewing
                    functionality.
                  </p>
                  <div className="flex mt-auto mb-0 gap-2">
                    <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 mb-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <img src={Project1} className="h-[200px] w-[350px]" />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-semibold mt-8 lg:mt-0">
                    India Bazaar
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    To streamline cricket tournament registration processes,
                    ensuring seamless user management and team viewing
                    functionality.
                  </p>
                  <div className="flex mt-auto mb-0 gap-2">
                    <button className="flex-1 text-sm py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                      Checkout github
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div class="grid grid-cols-4 md:grid-cols-7 gap-4 p-5">
                <div class="text-center">
                  <img src={React} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Bootstrap} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Js} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Electron} className="w-[96px]" alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Node} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Express} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Typescript} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Codeigniter} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Mysql} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Mongodb} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
                <div class="text-center">
                  <img src={Redux} alt="" />
                  {/* <h2 className="font-semibold">React</h2> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section> */}
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git & Github
                </p>
              </div>

              {/* <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div> */}
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RWD
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Contact Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-500 rounded-md">
              {/* Contact Information */}
              <div className="p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-2">
                  <strong>Email:</strong> 
                  <a href="mailto:suthardilip189@gmail.com" className="text-blue-500 hover:underline"> suthardilip189@gmail.com</a>
                </p>
                <p>
                  <strong>Mobile:</strong>
                  <a href="tel:+918502063255" className="text-blue-500 hover:underline"> +91 8502063255</a>
                </p>
              </div>
              {/* Contact Form */}
              <div className="p-5 rounded-lg shadow-md">
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <input type="text" id="name" name="name" className="text-sm font-medium text-gray-500 bg-black mt-1 block w-full px-4 py-2 border border-gray-800 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" id="email" name="email" className="text-sm font-medium text-gray-500 bg-black mt-1 block w-full px-4 py-2 border border-gray-800 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Email" />
                  </div>
                  <div>
                    <textarea id="message" name="message" rows="4" className="text-sm font-medium text-gray-500 bg-black mt-1 block w-full px-4 py-2 border border-gray-800 rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Message"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-t from-blue-500 rounded-md to-cyan-500 hover:from-blue-700 hover:to-cyan-700">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} className="w-5" alt="Facebook" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
