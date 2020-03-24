import React, { Component } from 'react';
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

class Main extends Component {
  static navigationOptions = {
    title: 'Rocketshoes',
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`/products`);

    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    return (
      <IntlProvider locale="pt-BR">
        <Container>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(product) => String(product.id)}
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
                <AddButtom>
                  <AddButtomProductAmount>
                    <Icon name="add-shopping-cart" size={20} color="#FFF" />
                    <AddButtomProductAmountText>0</AddButtomProductAmountText>
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
}

export default Main;
