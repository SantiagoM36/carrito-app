import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import IceCream from './IceCream.components';

class Cart extends React.Component {
    state = {}
    render() {
        const { cart, removeProductFromCart } = this.props;
        return (
            <section className='d-flex flex-column'>
                <div className='col-6'>
                    <Table striped borderless>
                        <thead className='text-white'>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Desc</th>
                                <th>Price</th>
                                <th>Cant</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {cart.length === 0
                                ? <tr>
                                    <td colSpan={6} className='text-center'>No hay elementos que mostrar</td>
                                </tr>
                                : cart.map((item, i) => (
                                    <IceCream key={i} cart={item} removeProductFromCart={removeProductFromCart} />
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                <div className='align-self-center'>
                    <Button variant='primary'>Comprar productos</Button>
                </div>
            </section>
        );
    }
}

export default Cart;