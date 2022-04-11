import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from '../components/Header.components';
import Products from '../components/Products.components';

class Index extends React.Component {
    state = {}
    render() {
        return (
            <>
                <Header cart={this.props.cart} removeProductFromCart={this.props.removeProductFromCart}/>
                <Container>
                    <Products
                        loading={this.props.loading} addProductToCart={this.props.addProductToCart} cart={this.props.cart}/>
                </Container>
            </>
        );
    }
}

export default Index;