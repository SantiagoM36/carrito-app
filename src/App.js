import React from 'react';
import { Provider } from 'react-redux';
import { initProducts, initCart } from './actions/shopping.actions';
import store from './store';

import Index from './pages/Index.pages';
import { getProducts } from './services/api.services';
import { STORAGE_PRODUCTS_CART } from './utils/constants';


class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      getProducts().then(product => {
        store.dispatch(initProducts(product))
        this.setState({ loading: false })
      })
    }, 2500);
    this.getProductsFromStorage()
  }

  getProductsFromStorage = () => {
    const products = JSON.parse(localStorage.getItem(STORAGE_PRODUCTS_CART));

    if (!products) {
      return;
    } else {
      store.dispatch(initCart(products))
    }

  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Index
            loading={this.state.loading}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
