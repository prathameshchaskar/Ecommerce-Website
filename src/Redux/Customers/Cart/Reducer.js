import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};

const calculateTotalPrice = (cartItems) => {
  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = cartItems.length;

  cartItems.forEach((item) => {
    if (item.product) {
    totalPrice += item.product.price * item.quantity;
    totalDiscountedPrice += item.product.discountedPrice * item.quantity; // Assuming discountedPrice exists
    }
  });

  // Calculate discount
  let discount = totalPrice - totalDiscountedPrice;

  return {
    totalPrice,
    totalDiscountedPrice,
    discount,
    totalItem
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
    case GET_CART_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case ADD_ITEM_TO_CART_SUCCESS:
      const updatedCartItemsAfterAdd = [...state.cartItems, action.payload.item]; // Assuming `item` is the added item
      const updatedCartDataAfterAdd = calculateTotalPrice(updatedCartItemsAfterAdd);
      return {
        ...state,
        cartItems: updatedCartItemsAfterAdd,
        cart: updatedCartDataAfterAdd,
        loading: false,
      };

    case GET_CART_SUCCESS:
      console.log("Cart Data:", action.payload.cartItems);  // Log to verify
      const fetchedCartData  = calculateTotalPrice(action.payload.cartItems);
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cart: fetchedCartData,
        loading: false,
      };

    case REMOVE_CART_ITEM_SUCCESS:
      const removedCartItems = state.cartItems.filter((item) => item.id !== action.payload);
      const updatedAfterRemove = calculateTotalPrice(removedCartItems);
      return {
        ...state,
        cartItems: removedCartItems,
        cart: updatedAfterRemove,
        loading: false,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      const updatedAfterEdit = calculateTotalPrice(updatedCartItems);
      return {
        ...state,
        cartItems: updatedCartItems,
        cart: updatedAfterEdit,
        loading: false,
      };
    
    case ADD_ITEM_TO_CART_FAILURE:
    case GET_CART_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default cartReducer;
