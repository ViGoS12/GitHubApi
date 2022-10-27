import User from '../pages/User'
import Home from './../pages/Home'

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/user/:id', element: <User /> },
]
