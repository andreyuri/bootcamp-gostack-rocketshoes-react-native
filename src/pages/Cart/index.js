import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductInfoImage,
  ProductDetails,
  ProductDetailsTitle,
  ProductDetailsPrice,
  ProductDelete,
  ProductSubTotal,
  ProductSubTotalPrice,
  ProductSubTotalControlButton,
  ProductSubTotalAmount,
  Total,
  TotalTitle,
  TotalPrice,
  Order,
  OrderText,
} from './styles';

export default function Cart() {
  const total = useSelector((state) =>
    state.cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.amount * product.price,
    }))
  );

  const dispatch = useDispatch();

  function increase({ id, amount }) {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function decrease({ id, amount }) {
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  }

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
                <ProductDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <Icon
                    name="delete-forever"
                    size={24}
                    color={colors.primary}
                  />
                </ProductDelete>
              </ProductInfo>
              <ProductSubTotal>
                <ProductSubTotalControlButton onPress={() => decrease(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductSubTotalControlButton>
                <ProductSubTotalAmount>{product.amount}</ProductSubTotalAmount>
                <ProductSubTotalControlButton onPress={() => increase(product)}>
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductSubTotalControlButton>
                <ProductSubTotalPrice>
                  <FormattedNumber
                    value={product.subtotal}
                    style="currency"
                    currency="BRL"
                  />
                </ProductSubTotalPrice>
              </ProductSubTotal>
            </Product>
          ))}
        </Products>
        <Total>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>
            {' '}
            <FormattedNumber value={total} style="currency" currency="BRL" />
          </TotalPrice>
          <Order>
            <OrderText>Finalizar pedido</OrderText>
          </Order>
        </Total>
      </Container>
    </IntlProvider>
  );
}
