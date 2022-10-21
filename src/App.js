import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </>
  )
}

export default App
