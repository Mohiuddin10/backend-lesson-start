import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './assets/components/Main.jsx';
import Services from './assets/components/Services.jsx';
import Service from './assets/components/Service.jsx';
import Users from './assets/components/Users.jsx';
import User from './assets/components/User.jsx';
import UsersNumber from './assets/components/UsersNumber.jsx';
import SingleUserNumber from './assets/components/SingleUserNumber.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: "/users/:id",
        element: <User />,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: '/usersNumber',
        element: <UsersNumber></UsersNumber>
      },
      {
        path: '/usersNumber/:id',
        element: <SingleUserNumber></SingleUserNumber>,
        loader: ({params}) => fetch(`http://localhost:5000/user-numbers/${params.id}`)
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch('http://localhost:5000/services/')
      },
      {
        path: '/services/:id',
        element: <Service></Service>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
