"use client";

import Image from "next/image";
import { useState } from "react";
import Img from "@/assets/Hero.png";
import logo from "@/assets/logo.png";
import "@/styles/home.css";
import { Features } from "@/components/Features";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="backgroundImage flex flex-wrap flex-col">
        <div className="flex md:flex-row flex-wrap md:pt-16 md:px-48 pt-10 px-10 justify-between">
          <div className="flex px-5 h-5 flex-col">
            <Image src={logo} alt="logo" />
            <div>
              <div
                className={`${
                  isMenuOpen ? "flex" : "hidden"
                } md:mr-auto items-center font-bold my-5 transition-all duration-500 ease-out`}
              >
                <button className="rounded-md border-solid border-2 border-blue-500 text-blue-500">
                  <p className="py-2 px-8">Enquire Now</p>
                </button>
              </div>
            </div>
          </div>

          <div className="items-center hidden font-bold lg:flex">
            <button
              className="rounded-md border-solid border-2"
              style={{ color: "#17ABFF", borderColor: "#17ABFF" }}
            >
              <p className="py-2 px-8">Enquire Now</p>
            </button>
          </div>

          <button
            className="inline-flex p-3 mx-4 hover:bg-gray-300 rounded lg:hidden ml-auto text-white bg-hero hover:text-white outline-none transition-all duration-500 ease-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div className="flex md:flex-row flex-col md:pt-28 pt-10 md:px-48 px-10 justify-between">
          <div>
            <div>
              <h1 className="text-white text-5xl font-bold">HARBOUR LIGHTS</h1>
              <h1 className="text-white text-5xl font-bold">
                DE <span className="text-hero font-bold">GRESOGONO</span>
              </h1>
              <h5 className="text-white text-2xl text-wrap pt-3">
                1,2 & 3 Bedrooms Seaside Apartments
              </h5>
              <h5 className="text-white text-2xl text-wrap">
                in Dubai Maritime City
              </h5>
            </div>

            <div className="mt-10 mb-20 w-3/4">
              <div className="backdrop-blur-lg border-1 border-l-[5px] border-hero mb-4">
                <h1 className="text-white p-3">
                  Rental Returns of{" "}
                  <span className="font-bold">UPTO 11%**</span>
                </h1>
              </div>
              <div className="backdrop-blur-sm border-1 border-l-[5px] border-hero">
                <h1 className="text-white p-3">
                  Capital Appreciation of{" "}
                  <span className="font-bold">UPTO 32%**</span>
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="w-72 border-1 flex flex-col rounded-md backdrop-blur-md">
              <div className="flex flex-col px-8 pt-10 pb-4">
                <span className="" style={{ color: "#fcfcfc" }}>
                  PRICING STARTS FROM
                </span>
                <span className="text-white text-4xl font-bold leading-10">
                  $ 425,000
                </span>
                <span className="text-white text-xl font-bold my-1">
                  AED 1.3 Million
                </span>

                <button className="rounded-md text-sm py-3 my-4 text-white px-8 border-2 border-hero border-solid bg-hero hover:bg-transparent transition-all duration-500 ease-out">
                  GET A PRESENTATION
                </button>
              </div>

              <hr style={{ backgroundColor: "black" }} />
              <div
                className="text-xs py-2 pb-8 px-8"
                style={{ color: "#98C5E8" }}
              >
                Get an Expert's Presentation of Real Estate in dubai for life
                and investments
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
