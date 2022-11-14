import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CatalogContextProvider } from "context/catalogContext";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let user = localStorage.getItem("userTKN");
    !user && localStorage.setItem("userTKN", JSON.stringify([]));
  }, []);

  return (
    <CatalogContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CatalogContextProvider>
  );
}
