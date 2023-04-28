import Image from "next/image";

export default function Loader() {
  return (
    <>
      <div className="loader">
        <Image
          src="/images/whos_that_pokemon.png"
          alt="Loading"
          width={350}
          height={350}
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Loading...</h2>
    </>
  );
}
