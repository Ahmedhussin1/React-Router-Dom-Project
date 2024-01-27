import { fetchData } from "../Helper";
import { Outlet, useLoaderData } from "react-router-dom";

export function MainLoader() {
  const userName = fetchData("userName");
  return { userName };
}
function Main() {
  const { userName } = useLoaderData();
  return (
    <div>
    navbar
      <main>
        <Outlet />
      </main>
      img
    </div>
  );
}

export default Main;
