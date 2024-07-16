import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './shared/Menu'
import CourseList from './pages/CourseList'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route index element={<CourseList />} />
          <Route path='/:id' element={<CourseList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
