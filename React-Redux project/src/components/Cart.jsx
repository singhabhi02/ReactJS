import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>
                {item.name} - {item.price}
              </span>

              <button onClick={() => dispatch(removeCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}


export default Cart;