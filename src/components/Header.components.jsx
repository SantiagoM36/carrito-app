import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Cart from './Cart.components';

import { CartFill, CartOut, CloseCart } from './Buttons.components';
import { CLEAR_CART } from '../actions/types';




class Header extends React.Component {
    state = {
        cartOpen: false,
    }

    setCartOpen = open => {
        this.setState({ cartOpen: open })
    }

    openCart = () => {
        this.setCartOpen(true);
        document.body.style.overflow = 'hidden';
    }

    closeCart = () => {
        this.setCartOpen(false);
        document.body.style.overflow = 'auto';
    }

    render() {
        const { cart } = this.props.state.iceCreams;
        const { clearCart } = this.props;
        
        const widthCartContent = this.state.cartOpen ? 680 : 0;
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
                <Navbar.Brand href="#home">Heladeria 'Polar'</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Helados</Nav.Link>
                    </Nav>
                    <Container className="justify-content-end">
                        {cart.length > 0
                            ? <div className='d-none d-lg-block'><span className="badge badge-danger">{cart.length}</span><CartOut openCart={this.openCart}/></div>
                            : <div className='d-none d-lg-block'><span className="badge badge-danger">{cart.length}</span><CartFill openCart={this.openCart}/></div>
                        }
                    </Container>
                    <aside className='d-flex flex-column cart-content' style={{ width: widthCartContent }}>
                        <div className='d-flex flex-row justify-content-between'>
                            <h3 className='h4 text-light p-3'>Carrito de compras</h3>
                            <CloseCart closeCart={this.closeCart} />
                        </div>
                        <button type="button" className='btn btn-danger' onClick={() => clearCart()}>Limpiar Carrito</button>
                        <Cart cart={cart} />
                    </aside>
                </Navbar.Collapse>
            </Navbar> 
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        clearCart: () => dispatch({type: CLEAR_CART})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);