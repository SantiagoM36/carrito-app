import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Cart from './Cart.components';

import { CartFill, CartOut, CloseCart } from './Buttons.components';




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
        const { cart, removeProductFromCart } = this.props;
        
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
                        <Cart cart={cart} removeProductFromCart={removeProductFromCart} />
                    </aside>

                </Navbar.Collapse>
            </Navbar> 
        )
    }
}

export default Header;