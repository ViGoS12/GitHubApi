import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/index'

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          element={route.element}
          key={route.path}></Route>
      ))}
    </Routes>
  )
}

export default App
