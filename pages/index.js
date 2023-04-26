import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import clsx from "clsx";
import Loader from "@/components/loader/Loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Pokemon({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher
  );

  if (error) return <div>error loading</div>;
  if (isLoading) return <Loader />;

  const updateName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // рендер данных
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
        alt={data.name}
        width={350}
        height={350}
      />
      <h2 style={{ textAlign: "center" }}>{updateName}</h2>
    </div>
  );
}

export default function Home() {
  let [count, setCount] = useState(1);

  if (count > 1008) {
    return setCount((count = 1));
  } else if (count < 1) {
    return setCount((count = 1008));
  }

  return (
    <Layout home>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <Pokemon id={count} />
        <p>Pokemon: {count} of 1008</p>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="danger" onClick={() => setCount(count - 1)}>
            Prev
          </Button>
          <Button variant="warning" onClick={() => setCount(count + 1)}>
            Next
          </Button>
        </div>
      </main>
    </Layout>
  );
}
