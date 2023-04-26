import Image from "next/image";

export default function Loader() {
    return (
        <div className="loader">
            <Image
            src='/images/whos_that_pokemon.png'
            alt='Loading'
            width={475}
            height={475}/>
        </div>
    )
};
