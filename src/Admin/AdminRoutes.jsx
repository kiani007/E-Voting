import React from 'react'
import { Routes, Route } from 'react-router'
import { AdminPage } from './AdminPage'
import { ErrorPage } from '@/pages'
const AdminRoutes = () => {
  return (
      <Routes>

        <Route path="/" element={<AdminPage/>} />

        <Route path="/*" element={<ErrorPage />} />

      </Routes>
  )
}

export default AdminRoutes