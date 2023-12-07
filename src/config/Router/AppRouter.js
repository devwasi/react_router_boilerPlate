import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import { RouterList } from '../../utilis/RouterList'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          {RouterList.map((e, i) => (
            <Route path={e.path} element={e.element} key={i} />
          ))}
        </Routes>
      </Router>

  )
}

export default AppRouter