import React from 'react';
import { connect } from 'react-redux';
import ProductFilter from './ProductFilter.components';
import Product from './Product.components';
import Spinner from './Spinner.components';

class Products extends React.Component {

    render() {
        const { products, filter, sort } = this.props.products;
        console.log('Sort: ', sort)
        return (
            <>
               <ProductFilter />
                <section className='row mt-5'>
                    {this.props.loading
                        ? <Spinner />
                        : !filter.length 
                                ? !sort.length ? products.map(product => (<Product key={product.id} product={product} />)) : sort.map(product => (<Product key={product.id} product={product} />))
                                : !sort.length ? filter.map(product => (<Product key={product.id} product={product} />)) : sort.map(product => (<Product key={product.id} product={product} />))
                    }
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.iceCreams
    }
}

export default connect(mapStateToProps)(Products);