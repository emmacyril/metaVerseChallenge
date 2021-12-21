import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function NavBar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { authenticate } = useMoralis();

  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#" className="flex">
              <Image
                className="mr-3 h-10"
                width={45}
                height={45}
                src="http://links.emmacyril.com/lg2.png"
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                MangoChat
              </span>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-gray-700 lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  NFTs
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-gray-700 lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  Games
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-gray-700 lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  Staking
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="#"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  onClick={authenticate}
                  type="button"
                  className="text-white bg-gradient-to-bl from-[#FF9C37] via-[#F20242] to-[#AE2B8C] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                >
                  Get started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
