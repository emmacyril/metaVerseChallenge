import Image from "next/image";
import { useMoralis } from "react-moralis";
import Footer from "./Footer";
import NavBar from "./NavBar";
function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="w-full h-full md:h-screen lg:h-screen bg-[#161616] relative text-white">
      <NavBar />
      <div className="flex h-[200px] md:h-1/5 text-center items-end justify-center ">
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

      <div class="container m-auto pr-16 pl-16 pt-16 text-grey-darkest items-center justify-center">
        <div class="flex flex-wrap -mx-2 mb-8 items-center justify-center">
          <div class="w-full md:w-2/5 lg:w-2/5 px-2 mb-4 md:mb-0 lg:mb-0">
            {/* <div class="w-full md:w-2/5 lg:w-2/5 px-2 mb-4 after:flex after:content-['/'] after:text-white after:w-full after:md:w-1 after:text-center after:justify-center after:items-center after:h-[50px]"> */}
            <div class=" flex items-center justify-center">
              <div className="relative w-full">
                <form class="">
                  <div class="md:flex items-center justify-center mb-1">
                    <div class="w-full">
                      <input
                        class="bg-[#222222] opacity-50 appearance-none w-full py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        value="example@example.com"
                      />
                    </div>
                  </div>
                  <div class="md:flex items-center justify-center mb-1">
                    <div class="w-full">
                      <input
                        class="bg-[#222222] opacity-50 appearance-none w-full py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>

                  <div class="flex">
                    <button
                      type="button"
                      class="w-full text-white bg-gradient-to-bl from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                    >
                      Login to Your Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* 
          <div class="w-full lg:w-1/5 p-5">
            <div class="flex items-center justify-center">/</div>
          </div> */}

          <div class="w-full lg:w-2/5 px-2">
            <div class="flex items-center justify-center">
              <div class="relative w-full">
                <button
                  onClick={authenticate}
                  type="button"
                  class="w-full h-[55px] border text-white border-x-pink-400 border-y-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // class="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                >
                  Sign in with MetaMask
                </button>
                <button
                  type="button"
                  class="w-full h-[55px] border text-white border-y-pink-400 border-x-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // class="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
                >
                  Sign in with Google
                </button>
                <button
                  type="button"
                  class="w-full h-[55px] border text-white border-x-pink-400 border-y-yellow-600 font-bold text-sm px-5 py-3 text-center focus:outline-none"
                  // class="w-full text-white border border-rose-400 from-[#FF9C37] via-[#F20242] to-[#AE2B8C] focus:ring-4  font-bold text-sm px-5 py-3 text-center"
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

      {/* <div className="flex space-x-20 m-50">
        <div className="w-1/2 bg-white">1</div>
        <div className="w-1/2 bg-gray-400">1</div>
      </div> */}

      {/* <div className="flex flex-col absolute z-50 h-4/6  w-full  items-center justify-center space-y-4 ">
        <Image
          className="object-cover rounded-full"
          src="http://links.emmacyril.com/lg1.png"
          // src="https://links.papareact.com/3pi"
          alt=""
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 text-black rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the MetaVerse
        </button>
      </div> */}

      {/* <div className="w-full h-screen">
        <Image
          src="http://links.emmacyril.com/bg5.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
    </div>
  );
}

export default Login;
