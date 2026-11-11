import React from 'react'
import { Route, Routes } from 'react-router'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Search from '../Pages/Search'
import Cart from '../Pages/Cart'
import ProductDetail from '../Pages/ProductDetail'

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}
