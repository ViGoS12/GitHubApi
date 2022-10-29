import Repository from '../pages/Repository'
import Home from './../pages/Home'
import User from './../pages/User'

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: ':userName/repos', element: <User /> },
  { path: ':userName/repos/:repoName', element: <Repository /> },
]
