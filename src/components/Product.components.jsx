import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import toast, { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../actions/types';

const Product = props => {
    const { addToCart, product } = props;
    //const { products, cart } = props.state.iceCreams;

    return (
        <>
            <Col xs={12} md={4} lg={3} className='mb-4' >
                <Card>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title className='text-info h5'>{product.name}</Card.Title>
                        <div className='row'>
                        <Card.Text className='col-8 col-lg-7'>
                            {product.desc}
                        </Card.Text>
                        <Card.Text className='col h6'>
                            $ {product.price.toFixed(2)}
                        </Card.Text>
                        <Card.Text className='col'>  
                            Cantidad: {product.cant}
                        </Card.Text>
                        </div>
                        <Button variant="outline-info" className='rounded-pill offset-3 offset-md-1' onClick={() => {addToCart(product); toast.success(`El producto ${product.name} fue añadido con exito`)}}>Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Toaster
                position="button-left"
                gutter={8}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </>
    );
}

const mapStateToProps = state => {
    return ({
        state
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        addToCart: value => dispatch({type: ADD_TO_CART, payload: {cart: value}})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);