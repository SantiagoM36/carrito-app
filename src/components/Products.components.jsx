import React from 'react';
import Product from './Product.components';
import Spinner from './Spinner.components';

class Products extends React.Component {
    state = {}
    render() {
        return (
            <section className='row mt-5'>
                { this.props.loading 
                        ? <Spinner />
                        : this.props.products.map(product=> (
                            <Product key={product.id} {...product} addProductToCart={this.props.addProductToCart} cart={this.props.cart}/>
                        ))
                }
            </section>
        );
    }
}

export default Products;