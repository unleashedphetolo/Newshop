import {
  PRODUCTS_LOADING,
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_TO_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_CART_ITEM,
  ORDER_LOADING,
  ADD_ORDER,
  SHOP_ERROR,
  GET_ORDERS,
  GET_POSTS,
  SET_PRODUCT,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ORDER_LOADING:
      return {
        ...state,
        orderLoading: true,
      }
    case ADD_ORDER:
      return {
        ...state,
        orderLoading: false,
        cart: [],
      }
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case GET_ORDERS:
      return {
        ...state,
        orderLoading: false,
        orders: action.payload,
      }
    case GET_POSTS:
      return {
        ...state,
        orderLoading: false,
        posts: action.payload,
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.some((item) => item.id === action.payload.id)
          ? state.cart
          : [...state.cart, action.payload],
      }
    case INCREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      }
    case DECREMENT_QTY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      }
    
    case SHOP_ERROR:
      return {
        ...state,
        loading: false,
        orderLoading: false,
      }

      case GET_PRODUCT:
        return {
          ...state,
          loading: false,
          product: action.payload,
        };

    case SET_PRODUCT:
      return {
        loading: false,
        product: action.payload,
      }
    default:
      return state
  }
}
