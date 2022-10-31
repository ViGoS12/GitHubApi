import { Suspense } from 'react'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { publicRoutes } from './routes/index'

import { ToastContainer } from 'react-toastify'

import Loader from './shared/UI/loader'

const router = createBrowserRouter(
  createRoutesFromElements(
    publicRoutes.map((route) => (
      <Route path={route.path} element={route.element} key={route.path}></Route>
    ))
  )
)

function App() {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
