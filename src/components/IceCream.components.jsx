import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from '../actions/types';

class IceCream extends React.Component {
    render() {
        console.log('This.props', this.props.cart)
        return (
            Object.keys(this.props.cart).map(iceCream => (
                <tr key={iceCream.id} className=''>
                    <td><img src={iceCream.img} className='img-thumbnail img-table' alt={iceCream.name}/></td>
                    <td className='text-info mt-1'>{iceCream.name}</td>
                    <td className='mt-1'>{iceCream.desc}</td>
                    <td className='mt-2 h6'>{iceCream.price}</td>
                    <td className='mt-2 h6'>{iceCream.cant}</td>
                    <td>
                        <Button variant="danger" onClick={()=>this.props.removeProductFromCart(iceCream.id)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </Button>
                    </td>
                </tr>
            ))

        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        removeProductFromCart: (id, all = false) => 
            all 
                ? dispatch({type: REMOVE_ALL_FROM_CART, payload: id}) 
                : dispatch({type: REMOVE_ONE_FROM_CART, payload: id})
    })
}



export default connect(null, mapDispatchToProps)(IceCream);