import Image from "next/image";
import style from './header.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
      <Image
        src="/pokemonlogo.png"
        alt="Pokemon Logo"
        width={384}
        height={141}
        priority
      />
    </div>
  );
}
