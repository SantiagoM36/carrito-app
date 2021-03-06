import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import toast, { Toaster } from 'react-hot-toast';

const Product = props => {

    /*restIceCream = id => {
        const idProduct = product => product.id === id;

    }*/

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
                        <Button variant="outline-info" className='rounded-pill offset-3 offset-md-1' onClick={() => {props.addProductToCart(props); toast.success(`El producto ${props.name} fue añadido con exito`)}}>Añadir al carrito</Button>
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

export default Product;