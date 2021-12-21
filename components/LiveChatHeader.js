import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "../components/ChangeUsername";

function LiveChatHeader() {
  const { user, logout } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700  text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="http://links.emmacyril.com/lg2.png"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the MetaVerse</h1>
          <div className="flex-auto">
            <h2 className="items-center justify-center  text-[#FF9C37] font-bold text-sm truncate">
              @{user.getUsername()}
            </h2>
            <ChangeUsername />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveChatHeader;
