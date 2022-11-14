import Head from "next/head";
import Image from "next/image";
import Home from "../components/Home";
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Terre Bleu</title>
      </Head>
      <Home />
    </>
  );
}
