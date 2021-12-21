import Head from "next/head";

import { useMoralis } from "react-moralis";
import Login from "../components/Login";
import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import ChatSection from "../components/ChatSection";

import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll overflow-hidden ">
      <Head>
        <title>Welcome to the MetaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <div>
          <Header transparent />

          <main className="">
            <ProfileHeader />
            {/* <ChatSection /> */}
          </main>
        </div>
      </div>
    </div>
  );
}
