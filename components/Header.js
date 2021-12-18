import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="http://links.emmacyril.com/lg1.png"
          />
        </div>

        <div>
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to ZoeVerse</h1>
          <h2 className="">{user.get("username")}</h2>
          {/* change username  */}
        </div>
      </div>
    </div>
  );
}

export default Header;
