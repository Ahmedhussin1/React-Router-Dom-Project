import { fetchData } from "../Helper";
import { useLoaderData } from "react-router-dom";

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}
function Dashboard() {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
