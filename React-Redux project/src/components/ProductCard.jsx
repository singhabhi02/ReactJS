import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/cartSlice'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()

    const handleAddtoCart = () =>{
        dispatch(addtoCart(product))
    }

  return (
    <div className='product-card'>
        <h3>{product.name}</h3>

        <p>{product.price}</p>

        <button onClick={handleAddtoCart}>Add to cart</button>
    </div>
  )
}

export default ProductCard;