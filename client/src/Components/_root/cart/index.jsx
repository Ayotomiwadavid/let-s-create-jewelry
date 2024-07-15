import React from 'react'
import Cart from './cart'
import Cart_Section from './section'
import Navbar from '../../shared/Navbar/navbar'
import Cart_Hero from '../../shared/hero/hero'
import Footer from '../../shared/Footer/footer'

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <Cart />
      <Cart_Section />
      <Footer />
    </div>
  )
}