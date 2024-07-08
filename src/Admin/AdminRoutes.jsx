import React from 'react'
import { Routes, Route } from 'react-router'
import { AdminPage, User, EditUser, Candidates, EditCandidates } from './AdminPage'
import { ErrorPage } from '@/pages'
const AdminRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/candidate" element={<Candidates />} />
        <Route path="/candidate/edit/:id" element={<EditCandidates />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  )
}

export default AdminRoutes