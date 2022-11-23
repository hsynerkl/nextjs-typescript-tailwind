import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sticky, setSticky] = useState("");

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 44 ? setSticky("pt-16") : setSticky("");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      <Header />
      <main className={`${sticky}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
