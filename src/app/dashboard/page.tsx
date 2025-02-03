"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const page = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <>
      <header className="shadow-lg sticky z-50 top-0 backdrop-blur-3xl  w-screen">
        <nav className="bg-gradient-to-b from-green-950 via-green-950/80 to-green-950/30 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src="/assets/ecogrow2.png"
                  alt="logo"
                  className="w-20 inline"
                />
                <p className="inline font-bold text-3xl text-center mx-6">
                  EcoGrow
                </p>
              </div>
            </Link>
            {/* Hamburger menu  */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white"
              >
                <FontAwesomeIcon icon={faBars} className="w-6" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="w-6 inline mx-6 hover:cursor-pointer"
              />
              <Link
                href="/add"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Watch & Plant
              </Link>
              <FontAwesomeIcon
                icon={faUser}
                className="w-6 inline mx-6 hover:cursor-pointer"
              />
            </div>
          </div>
        </nav>

        {/* Mobile Menu (visible when menuOpen is true) */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-green-950/50 py-4">
            <FontAwesomeIcon icon={faBell} className="w-6 mb-4 text-white" />
            <Link
              href="/add"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mb-4 focus:outline-none"
            >
              Watch & Plant
            </Link>
            <FontAwesomeIcon icon={faUser} className="w-6 text-white" />
          </div>
        )}
      </header>

      <main className="bg-green-950/30 w-screen max-h-max px-4 lg:px-6">
        <div>
          <p className="py-6 text-white text-4xl text-center font-bold">
            DASHBOARD
          </p>
          <p className="text-2xl text-center md:text-left mx-3 my-6">
            Welcome, User!
          </p>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-5 md:grid-rows-5 md:gap-6">
          {/* Cards */}
          <div className="bg-slate-700 md:col-start-1 p-6 rounded-2xl">
            <div className="">
              <FontAwesomeIcon
                icon={faClock}
                className="inline pr-3 text-green-700"
              />
              <p className="inline text-2xl font-medium ">Ads Watched</p>
            </div>
            <div>
              <p className="text-xl my-1">1234</p>
            </div>
          </div>

          <div className="bg-slate-700 md:col-start-2 p-6 rounded-2xl">
            <div className="">
              <FontAwesomeIcon
                icon={faTree}
                className="inline pr-3 text-green-700"
              />
              <p className="inline text-2xl font-medium">Trees Planted</p>
            </div>
            <div>
              <p className="text-xl my-1">1234</p>
            </div>
          </div>

          <div className="bg-slate-700 md:col-start-3 p-6 rounded-2xl">
            <div className="">
              <FontAwesomeIcon
                icon={faEarthAsia}
                className="inline pr-3 text-green-700"
              />
              <p className="inline text-2xl font-medium">Active Regions</p>
            </div>
            <div>
              <p className="text-xl my-1">1234</p>
            </div>
          </div>
          <div className="bg-slate-700 md:col-start-4 md:col-end-6 p-6 rounded-2xl">
            <div className="">
              <FontAwesomeIcon
                icon={faWind}
                className="inline pr-3 text-green-700"
              />
              <p className="inline text-2xl font-medium">CO2 Offset</p>
            </div>
            <div>
              <p className="text-xl my-1">1234</p>
            </div>
          </div>

          {/* Map and leaderboard */}
          <div className="bg-slate-700 md:col-start-1 md:col-end-4 md:row-span-3 p-6 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-2xl">Planting Regions</p>
              <p className="text-xl">
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-green-700 mr-1"
                  />
                </span>
                12 active regions
              </p>
            </div>
            <div className="py-6 flex justify-center size-fit items-center ">
              <img src="/assets/map.png" className="w-11/12 m-2" alt="" />
            </div>
          </div>

          <div className="bg-slate-700 md:col-start-4 md:col-end-6 md:row-span-3 p-6 rounded-2xl flex flex-col">
            <div className="flex justify-between p-1 items-center">
              <p className="text-2xl font-medium ">Leaderboard</p>
              <FontAwesomeIcon icon={faAward} className="text-green-700" />
            </div>

            <div>
              {/* Each member */}
              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#1</p> {/*Ranking*/}
                  <p>Cristiano Ronaldo</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>921</p> {/*Score*/}
                </div>
              </div>

              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#2</p> {/*Ranking*/}
                  <p>Lionel Messi</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>850</p> {/*Score*/}
                </div>
              </div>

              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#3</p> {/*Ranking*/}
                  <p>Pele</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>762</p> {/*Score*/}
                </div>
              </div>

              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#4</p> {/*Ranking*/}
                  <p>Romario</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>756</p> {/*Score*/}
                </div>
              </div>

              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#5</p> {/*Ranking*/}
                  <p>Puskas</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>725</p> {/*Score*/}
                </div>
              </div>

              <div className="flex bg-slate-600 rounded-xl p-4 justify-between my-2 outline outline-green-700 hover:duration-500 hover:scale-105 ease-in-out">
                <div className="flex justify-between gap-2">
                  <p>#69</p> {/*Ranking*/}
                  <p>You</p> {/*UserName*/}
                </div>
                <div className="flex justify-between gap-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="inline text-green-700"
                  />
                  <p>69</p> {/*Score*/}
                </div>
              </div>
            </div>
          </div>

          {/* Qote */}
          <div className="bg-slate-700 md:col-span-5 p-6 rounded-2xl">
            <p className="text-2xl font-medium">
              Quote of the Day{" "}
              <span>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-green-700"
                />
              </span>
            </p>
            <div className="p-1">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                deserunt ex asperiores officia incidunt perferendis quos
                excepturi tempora rem numquam?"
              </p>
              <p>- A wise man</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
