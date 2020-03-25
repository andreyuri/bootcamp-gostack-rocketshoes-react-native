import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider, FormattedNumber } from 'react-intl';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductInfoImage,
  ProductDetails,
  ProductDetailsTitle,
  ProductDetailsPrice,
  ProductSubTotal,
  ProductSubTotalPrice,
  ProductSubTotalAmount,
  Total,
  TotalTitle,
  TotalPrice,
  Order,
  OrderText,
} from './styles';

function Cart({ cart }) {
  return (
    <IntlProvider locale="pt-BR">
      <Container>
        <Products>
          {cart.map((product) => (
            <Product key={String(product.id)}>
              <ProductInfo>
                <ProductInfoImage source={{ uri: product.image }} />
                <ProductDetails>
                  <ProductDetailsTitle>{product.title}</ProductDetailsTitle>
                  <ProductDetailsPrice>
                    <FormattedNumber
                      value={product.price}
                      style="currency"
                      currency="BRL"
                    />
                  </ProductDetailsPrice>
                </ProductDetails>
              </ProductInfo>
              <ProductSubTotal>
                <ProductSubTotalAmount>0</ProductSubTotalAmount>
                <ProductSubTotalPrice>
                  <FormattedNumber value={0} style="currency" currency="BRL" />
                </ProductSubTotalPrice>
              </ProductSubTotal>
            </Product>
          ))}
        </Products>
        <Total>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>
            {' '}
            <FormattedNumber value={0} style="currency" currency="BRL" />
          </TotalPrice>
          <Order>
            <OrderText>Finalizar pedido</OrderText>
          </Order>
        </Total>
      </Container>
    </IntlProvider>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
