
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import AddJob from './pages/AddJob'
import EditJob from './pages/EditJob'
import Layout from './components/Layout'
import Statistics from './pages/Statistics'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="addJob" element={<AddJob />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="analytics" element={<Statistics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="applications/:id/edit" element={<EditJob />} />
        </Route>
      </Routes>
  )

}

export default App
