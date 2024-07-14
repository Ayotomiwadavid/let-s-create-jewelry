import React from 'react'
import Navbar from '../../Components/shared/Navbar/navbar'
import Cart_Hero from '../../Components/shared/hero/hero'
import Cart from './cart'
import Cart_Section from './section'
import Footer from '../../Components/shared/Footer/footer'

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
