import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      console.log("Fetching cart items...");
      dispatch(getCart(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    console.log("Cart state after fetch:", cart);
  }, [cart]);

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      {cart.cartItems && cart.cartItems.length > 0 ? (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className="space-y-3">
              {cart.cartItems.map((item) =>
                item.product ? (
                  <CartItem key={item.id} item={item} showButton={true} />
                ) : (
                  <div key={item.id}>Product data is missing</div>
                )
              )}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>₹{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{cart.cart?.discount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                sx={{
                  padding: ".8rem 2rem",
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
