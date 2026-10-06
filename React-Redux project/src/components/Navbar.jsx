import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cartItems = useSelector(
        state => state.cart.items
    )

  return (
    <nav>
        <h2>ReduxCart</h2>

        <div>
        🛒Cart: {cartItems.length}
        </div>
    </nav>
  )
}

export default Navbar