import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
function Header(props) {
  const { user, logout } = useMoralis();
  const [navbarOpen, setNavbarOpen] = useState(false);
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
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  NFTs
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
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  Games
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
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
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
                  href="#pablo"
                >
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 490 269.31">
                    <g
                      id="video-camera-svgrepo-com"
                      transform="translate(0 -110.345)"
                    >
                      <g id="XMLID_588_">
                        <path
                          id="Path_5"
                          data-name="Path 5"
                          d="M344,373H0V114H344ZM16,359H330V128H16Z"
                        />
                      </g>
                      <g id="XMLID_589_">
                        <rect
                          id="Rectangle_19"
                          data-name="Rectangle 19"
                          width="122"
                          height="14"
                          transform="translate(38 329)"
                        />
                      </g>
                      <g id="XMLID_590_">
                        <rect
                          id="Rectangle_20"
                          data-name="Rectangle 20"
                          width="22"
                          height="14"
                          transform="translate(176 329)"
                        />
                      </g>
                      <g id="XMLID_592_">
                        <rect
                          id="Rectangle_21"
                          data-name="Rectangle 21"
                          width="13"
                          height="155"
                          transform="translate(361 166)"
                        />
                      </g>
                      <g id="XMLID_612_">
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M490,379.655,391,324.11V266h14v49.122l68,38.451V135.754l-68,36.387V221H391V162.913l99-52.568Z"
                        />
                      </g>
                    </g>
                  </svg>
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
                  href="#pablo"
                >
                  <svg
                    className="w-7 h-6 fill-white"
                    viewBox="0 0 512.345 512.033"
                  >
                    <g
                      id="phone-call-svgrepo-com"
                      transform="translate(-0.001 -0.156)"
                    >
                      <g id="Group_6" data-name="Group 6">
                        <g id="Group_5" data-name="Group 5">
                          <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M447.327,65.18C404.311,22.172,343.937-1.6,281.618.258a8.536,8.536,0,1,0,.478,17.066c57.523-1.493,113.451,20.224,153.165,59.921,39.7,39.7,61.551,95.531,59.93,153.173a8.545,8.545,0,0,0,8.294,8.772h.247a8.543,8.543,0,0,0,8.525-8.294C514,168.587,490.335,108.179,447.327,65.18Z"
                          />
                          <path
                            id="Path_8"
                            data-name="Path 8"
                            d="M452.268,239.192h.265a8.539,8.539,0,0,0,8.525-8.277c1.476-49.1-16.725-96.307-49.937-129.527C378.635,68.9,331.8,50.871,281.722,51.459a8.534,8.534,0,0,0,.136,17.066h.137c45.133-.8,87.817,15.684,117.06,44.928,29.892,29.909,46.276,72.533,44.937,116.949A8.539,8.539,0,0,0,452.268,239.192Z"
                          />
                          <path
                            id="Path_9"
                            data-name="Path 9"
                            d="M281.857,119.725c19.063,0,54.955,3.891,81,29.935,26.044,26.061,29.935,61.935,29.935,81a8.533,8.533,0,1,0,17.066,0c0-21.7-4.54-62.66-34.935-93.065s-71.356-34.935-93.065-34.935a8.533,8.533,0,1,0,0,17.067Z"
                          />
                          <path
                            id="Path_10"
                            data-name="Path 10"
                            d="M361.49,311.742a8.783,8.783,0,0,0-12.066,0L300.81,360.365c-21.2,21.188-65.152,20.028-115.567-30.387s-51.593-94.37-30.4-115.567a8.523,8.523,0,0,0,0-12.066L81.921,129.41a8.532,8.532,0,1,0-12.066,12.066l67.319,67.337c-21.444,28.723-18.4,78.831,36,133.231,58.752,58.752,112.495,57.591,139.7,30.387l42.581-42.59,85.18,85.188-17.877,17.894a8.532,8.532,0,1,0,12.066,12.066l23.91-23.936a8.525,8.525,0,0,0,0-12.066Z"
                          />
                          <path
                            id="Path_11"
                            data-name="Path 11"
                            d="M337.187,384.677a8.532,8.532,0,0,0-12.066,12.066l66.773,66.773c-35.439,32.375-72.158,39.774-112.282,22.588-.589-.23-60.109-24.61-142.993-107.5-82.568-82.569-107.28-142.413-107.8-143.65C7.468,192.259,15.532,159.226,57.61,117.165l42.581-42.581,85.18,85.171-18.278,18.278A8.532,8.532,0,1,0,179.159,190.1l24.32-24.311a8.549,8.549,0,0,0,0-12.066L106.225,56.476a8.783,8.783,0,0,0-12.066,0L45.545,105.1c-47.71,47.7-56.977,87.526-32.29,136.841,1.033,2.543,25.95,63.386,111.292,148.727S270.732,500.935,273.1,501.873Q297.16,512.2,320.353,512.19c31.4,0,61.457-14.2,89.771-42.513a8.529,8.529,0,0,0,0-12.066Z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  onClick={logout}
                  type="button"
                  className="text-white bg-gradient-to-bl from-[#FF9C37] via-[#F20242] to-[#AE2B8C] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
