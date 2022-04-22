import React from 'react';
import { connect } from 'react-redux';
import { FILTER_PRODUCT, FILTER_PRODUCTS } from '../actions/types';

class ProductFilter extends React.Component {
    render() {
        const { filterProducts, filterProduct } = this.props;

        return (
            <form className='container row mt-5'>
                <div className="form-group col-6">
                    <input type="text" className="form-control" onChange={e=>filterProducts(e.target.value)}/>
                </div>
                <div className="form-group col-4">
                    <select className="form-control form-control-md" onChange={e=>filterProduct(e.target.value)}>
                        <option value='default'>by default</option>
                        <option value='asc'>by Name Asc</option>
                        <option value='desc'>by Name Desc</option>
                        <option value='low'>by Price Lower</option>
                        <option value='high'>by Price Higher</option>
                    </select>
                </div>
                <div className='col'>
                    <button type="submit" className="btn btn-primary" onClick={e => e.preventDefault()}>Search</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        filterProducts: value => dispatch({type: FILTER_PRODUCTS, payload: value}),
        filterProduct: value => dispatch({type: FILTER_PRODUCT, payload: value})
    })
}

export default connect(null, mapDispatchToProps)(ProductFilter);