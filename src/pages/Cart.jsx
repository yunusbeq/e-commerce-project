import {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'



const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {carts, totalAmount, itemCount} = useSelector(state => state.carts)

  console.log(carts, totalAmount, itemCount, "cart")

  useEffect( ()=>{

    dispatch(getCartTotal())
  } , [dispatch]  )

 


  return (
    <div>
      {
        carts?.length > 0 ? <div> 
          {
            carts?.map((cart,i) => {
              <CartComp key={i} cart={cart}/>
            }) 
          }
          


        </div>:
        <div>
          Kartınız boş.
        </div>
      }
    </div>
  )
}

export default Cart