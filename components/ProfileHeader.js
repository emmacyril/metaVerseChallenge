import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Link from "next/link";

function ProfileHeader() {
  const { user } = useMoralis();
  return (
    <div>
      <section className="relative block" style={{ height: "350px" }}>
        <div
          className="fixed top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('http://links.emmacyril.com/bg6.jpg')",
            zIndex: "-1",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        {/* <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              // className="text-gray-300 fill-current"
              className="text-[#FF9C37]  fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className=" text-white font-bold text-[30px]">
            ...as sweet as MangoChat.
          </h1>
          <div>
            <h4 className="items-center justify-center  text-[#FF9C37] font-bold text-sm truncate">
              @{user.getUsername()}
            </h4>
            <ChangeUsername />
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gray-800 bg-opacity-70 h-screen">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-24">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Avatar />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link href="/livechat">
                      <a
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        className="text-white bg-gradient-to-bl from-[#FF9C37] via-[#F20242] to-[#AE2B8C] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                      >
                        <i className="fas fa-comment-dots"></i> Start Chatting
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        22
                      </span>
                      <span className="text-sm text-gray-500">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        10
                      </span>
                      <span className="text-sm text-gray-500">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        89
                      </span>
                      <span className="text-sm text-gray-500">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <div className="text-sm leading-normal mt-5 mb-5 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                  Los Angeles, California
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileHeader;
