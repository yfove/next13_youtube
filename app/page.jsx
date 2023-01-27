import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  console.log(res);
  return (
    <main className={styles.main}>
      <h1>Hello next 13 🔥 </h1>
    </main>
  );
}
