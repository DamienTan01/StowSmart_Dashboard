import Head from "next/head";
import Login from "@/pages/Login";
import DarkModeTest from "./DarkModeTest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stowsmart Dashboard - Login</title>
        <meta name="description" content="Stowsmart RFID Cabinet Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* <Login /> */}
        <DarkModeTest />
      </main>
    </>
  );
}
