import style from "./layout.module.scss";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      {children}
    </div>
  );
}
