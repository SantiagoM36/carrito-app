import React from 'react';
import { connect } from 'react-redux';
import Product from './Product.components';
import Spinner from './Spinner.components';

class Products extends React.Component {
    render() {
        const { products } = this.props.products;
        return (
            <section className='row mt-5'>
                { this.props.loading 
                        ? <Spinner />
                        : products.map(product=> (
                            <Product key={product.id} {...product} 
                            //addProductToCart={this.props.addProductToCart} 
                            //cart={this.props.cart}
                            />
                        ))
                }
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.iceCreams
    }
}

export default connect(mapStateToProps)(Products);