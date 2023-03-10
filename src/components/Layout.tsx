import { ReactNode } from "react";
import { Footer } from ".";
import Header from "./Header";
import HtmlHead from "./HtmlHead";
import NavBar from "./NavBar";
import styles from "@/styles/Home.module.css";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <HtmlHead />
      <main className={styles.main}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}
