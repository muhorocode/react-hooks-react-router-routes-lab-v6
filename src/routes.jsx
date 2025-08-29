import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Actors from './pages/Actors'
import Directors from './pages/Directors'
import Home from './pages/Home'
import Movie from './pages/Movie'
import ErrorPage from './pages/ErrorPage'


const routes = [
   {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/actors',
        element:<Actors/>
       },
       {
        path:'/directors',
        element:<Directors/>
       },
       {
        path:'/movies/:id',
        element:<Movie/>
       },
      ]
   }
];

export default routes;