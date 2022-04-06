import React from 'react';
import Index from './pages/Index.pages';
import { getProducts } from './services/api.services';
import { STORAGE_PRODUCTS_CART } from './utils/constants' ;


class App extends React.Component {
  state = {
    products: [],
    loading: true,
    cart: []
  }

  setProducts = products => {
    this.setState({products})
  }

  setCart = product => {
    this.setState({cart: product})
  }

  componentDidMount(){
    setTimeout(() => {
      getProducts().then(product=> {
        this.setProducts(product)
        this.setState({loading: false})
      })
    }, 2500);
    this.getProductsFromStorage()
  }

  addProductToCart = ({id}) => {
    const products = [...this.state.products];
    const searchProduct = product => product.id === id;
    const carrito = products.filter(searchProduct);

    this.setCart([...this.state.cart, carrito]);
    localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify(this.state.cart))
  }

  getProductsFromStorage = () => {
    const products = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if (!products) {
      return;
    } else {
      this.setCart(JSON.parse(products))
    }
    
  }

  removeProductFromCart = id => {
    const {cart} = this.state;
    const product = cart.filter(product => product[0].id !== id );
    this.setCart(product)
    localStorage.setItem(STORAGE_PRODUCTS_CART, JSON.stringify(product))
  }

  emptyCart = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_CART)
  }

  render() {
    //console.log(this.state.cart)
  return (
    <div className="App">
      <Index 
        products={this.state.products} 
        loading={this.state.loading} 
        cart={this.state.cart} 
        addProductToCart={this.addProductToCart} 
        removeProductFromCart={this.removeProductFromCart}
      />
    </div>
  );
  }
}

export default App;
