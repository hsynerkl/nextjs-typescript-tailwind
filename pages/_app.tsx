import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import { AuthContextProvider } from "context/AuthContext";
import { CartContextProdiver } from "context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProdiver>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </CartContextProdiver>
    </AuthContextProvider>
  );
}
