import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import toast, { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../actions/types';

const Product = props => {
    const { addToCart } = props;

    return (
        <>
            <Col xs={12} md={4} lg={3} className='mb-4' >
                <Card>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title className='text-info h5'>{props.name}</Card.Title>
                        <div className='row'>
                        <Card.Text className='col-8 col-lg-7'>
                            {props.desc}
                        </Card.Text>
                        <Card.Text className='col h6'>
                            $ {props.price.toFixed(2)}
                        </Card.Text>
                        <Card.Text className='col'>
                            Cantidad: {props.cant}
                        </Card.Text>
                        </div>
                        <Button variant="outline-info" className='rounded-pill offset-3 offset-md-1' onClick={() => {addToCart(props); toast.success(`El producto ${props.name} fue añadido con exito`)}}>Añadir al carrito</Button>
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

const mapDispatchToProps = dispatch => {
    return ({
        addToCart: value => dispatch({type: ADD_TO_CART, payload: {cart: value}})
    })
}

export default connect(null, mapDispatchToProps)(Product);