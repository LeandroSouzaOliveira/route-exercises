import { Outlet } from "react-router-dom";
import Header from "../../component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
