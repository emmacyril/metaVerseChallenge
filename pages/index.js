import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-500 overflow-hidden">
      <Head>
        <title>Welcome to the MetaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <div>
          <Header />
          {/* HEader componenet */}

          {/* message component */}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col h-4/6 w-full text-white bg-black items-center justify-center">
        <h1 className="text-[30px]">Welcome to the MetaVerse</h1>
        <button
          className="bg-yellow-500 p-2 rounded-lg animate-pulse text-black font-bold"
          onClick={logout}
        >
          Logout
        </button>
      </div> */
}
