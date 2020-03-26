import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  Image,
  Title,
  Price,
  AddButtom,
  AddButtomText,
  AddButtomProductAmount,
  AddButtomProductAmountText,
} from './styles';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`/products`);

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <IntlProvider locale="pt-BR">
      <Container>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Product>
              <Image source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Price>
                <FormattedNumber
                  value={item.price}
                  style="currency"
                  currency="BRL"
                />
              </Price>
              <AddButtom onPress={() => handleAddProduct(item.id)}>
                <AddButtomProductAmount>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <AddButtomProductAmountText>
                    {amount[item.id] || 0}
                  </AddButtomProductAmountText>
                </AddButtomProductAmount>
                <AddButtomText>ADICIONAR</AddButtomText>
              </AddButtom>
            </Product>
          )}
        />
      </Container>
    </IntlProvider>
  );
}
