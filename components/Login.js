import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Footer from "./Footer";
import NavBar from "./NavBar";
function Login() {
  const { authenticate } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="w-full h-full md:h-screen lg:h-screen bg-[#161616] relative text-white">
      <NavBar transparent />
      <div className="flex h-[250px]  text-center items-end justify-center ">
        <h1 className="text-5xl font-bold p-2 leading-tight">
          Login to Your Account
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="p-2 max-w-[320px] lg:max-w-[550px] text-center text-gray-500">
          ...express yourself over the metaverse with friends, family and
          colleagues. More features are added daily by our amazing community.
        </p>
      </div>

      <div className="container m-auto pr-16 pl-16 pt-16 text-grey-darkest items-center justify-center">
        <div className="flex flex-wrap -mx-2 mb-8 items-center justify-center">
          <div className="w-full md:w-2/5 lg:w-2/5 px-2 mb-4 md:mb-0 lg:mb-0">
            {/* <div className="w-full md:w-2/5 lg:w-2/5 px-2 mb-4 after:flex after:content-['/'] after:text-white after:w-full after:md:w-1 after:text-center after:justify-center after:items-center after:h-[50px]"> */}
            <div className=" flex items-center justify-center">
              <div className="relative w-full">
                <form className="">
                  <div className="md:flex items-center justify-center mb-1">
                    <div className="w-full">
                      <input
                        className="bg-[#222222] opacity-50 appearance-none w-full py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="example@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center justify-center mb-1">
                    <div className="w-full">
                      <input
                        className="bg-[#222222] opacity-50 appearance-none w-full py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <button
                      type="button"
                      className="w-full text-white bg-gradient-to-bl from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                    >
                      Login to Your Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* 
          <div className="w-full lg:w-1/5 p-5">
            <div className="flex items-center justify-center">/</div>
          </div> */}

          <div className="w-full lg:w-2/5 px-2">
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <button
                  onClick={authenticate}
                  type="button"
                  className="w-full h-[55px] border text-white border-x-pink-400 border-y-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // className="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                >
                  Sign in with MetaMask
                </button>
                <button
                  type="button"
                  className="w-full h-[55px] border text-white border-y-pink-400 border-x-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // className="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                >
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="w-full h-[55px] border text-white border-x-pink-400 border-y-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // className="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                >
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="cursor-pointer max-w-[320px] lg:max-w-[550px] text-center text-white">
          Forgot Password?
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
