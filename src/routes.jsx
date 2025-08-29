import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Actors from './pages/Actors'
import Directors from './pages/Directors'
import Home from './pages/Home'
import Movie from './pages/Movie'


const routes = [
   {
    path:'/',
    element:<App/>,
    errorElement:<h1>Oops! Looks like something went wrong.</h1>,
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