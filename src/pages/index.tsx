import Head from "next/head";
import Login from "@/pages/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stowsmart RFID Cabinet Dashboard</title>
        <meta name="description" content="Stowsmart RFID Cabinet Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Login />
      </main>
    </>
  );
}
