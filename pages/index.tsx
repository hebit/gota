import Head from "next/head";
import GotaArea from "../components/GotaArea";
import NavBar from "../components/NavBar";
import Sections from "../components/Sections";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pangolin&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.welcomeScreen}>
        <p>Olá, eu sou @Hebit</p>
      </div>
      <NavBar />
      <GotaArea />
      <div className={styles.main}>
        <Sections />
      </div>
      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  );
}
