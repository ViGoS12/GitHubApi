import { lazy } from 'react'
import Home from './../pages/Home'

const User = lazy(() => import('./../pages/User'))
const Repository = lazy(() => import('../pages/Repository'))

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: ':userName/repos', element: <User /> },
  { path: ':userName/repos/:repoName', element: <Repository /> },
]
