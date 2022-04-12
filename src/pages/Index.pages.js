import React from 'react';
import Container from 'react-bootstrap/Container'
import Header from '../components/Header.components';
import Products from '../components/Products.components';

class Index extends React.Component {
    
    render() {
        return (
            <>
                <Header />
                <Container>
                    <Products
                        loading={this.props.loading} />
                </Container>
            </>
        );
    }
}

export default Index;