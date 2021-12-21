import Head from "next/head";

import { useMoralis } from "react-moralis";
import Login from "../components/Login";
import Header from "../components/Header";
import LiveChatHeader from "../components/LiveChatHeader";

import "@fortawesome/fontawesome-free/css/all.min.css";
import LiveChatMessage from "../components/LiveChatMessage";

function livechat() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <LiveChatHeader />
        <LiveChatMessage />
      </div>
    </div>
  );
}

export default livechat;
