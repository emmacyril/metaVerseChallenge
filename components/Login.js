import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6  w-full  items-center justify-center space-y-4 ">
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
      </div>

      <div className="w-full h-screen">
        <Image
          src="http://links.emmacyril.com/bg2.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
