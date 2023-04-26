import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Pokemon({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher
  );

  if (error) return <div>error loading</div>;
  if (isLoading) return <div>loading...</div>;

  const updateName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // рендер данных
  return (
    <div>
      <h1>{updateName}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
        alt={data.name}
        width={200}
        height={200}
      />
    </div>
  );
}

export default function Pikachu() {
  return (
    <Layout>
      <Head>
        <title>Pikachu</title>
      </Head>
      <Pokemon id="25" />
      <Link href="/">Home</Link>
    </Layout>
  );
}
