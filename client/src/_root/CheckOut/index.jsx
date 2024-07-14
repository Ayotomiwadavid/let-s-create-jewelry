import React from 'react'
import Navbar from '../../Components/shared/Navbar/navbar'
import Cart_Hero from '../../Components/shared/hero/hero'
import Footer from '../../Components/shared/Footer/footer'
import ShippingDetails from './FormField'


export default function CheckOutPage() {
  return (
    <div>
      <Navbar />
      <Cart_Hero />
      <ShippingDetails />
      <Footer />
    </div>
  )
}
