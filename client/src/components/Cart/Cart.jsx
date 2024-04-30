import React from 'react'
import "./Cart.scss"
import { useSelector } from 'react-redux'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
const Cart = () => {
  const uploadURL = "http://localhost:1337"
  const products = useSelector((state)=>state.cart.products)
  const dispatch = useDispatch();
  const totalPrice = ()=>{
    let total = 0;
    products.forEach(item=>{
      total += item.quantity * item.price
    })
    return total.toFixed(2);
  }

  const stripePromise = loadStripe(
    "pk_test_51PB4miRthXdOR4nVd533BEXGpd5ROhGxLQpLXy3vd2YLZfB9KFsgvyjbpvMMlCnelirDm8msMDIlql2vdrFiQ4Mw00fMGxxbDK"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={uploadURL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick = {handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset'  onClick={() => dispatch(resetCart())}></span>
    </div>
  );
}

export default Cart