import Navbar from "../Component/navbar";
import { fetchData } from "../Helper";
import { Outlet, useLoaderData } from "react-router-dom";

export function MainLoader() {
  const userName = fetchData("userName");
  return { userName };
}
function Main() {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
    <Navbar userName={userName}/>
      <main>
        <Outlet />
      </main>
      <img src="../../dist/assets/wave.svg"/>
    </div>
  );
}

export default Main;
