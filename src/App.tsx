import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { publicRoutes } from './routes/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    publicRoutes.map((route) => (
      <Route path={route.path} element={route.element} key={route.path}></Route>
    ))
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
