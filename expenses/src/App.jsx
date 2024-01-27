import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Main, { MainLoader } from './layouts/Main';
import { logoutAction } from './actions/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main/>,
    loader: MainLoader,
    children: [
      {
        index:true,
        element:<Dashboard/>,
        loader: dashboardLoader
      },
      {
        path:'about',
        element:<h1>about</h1>,
      },
      {
        path:'contact',
        element:<h1>contact</h1>,
      },
      {
        path:'logout',
        action: logoutAction,
      },
    ]
  },
])
function App() {

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
