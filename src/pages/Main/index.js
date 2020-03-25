import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  handleAddProduct = (product) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;
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
                <AddButtom onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Main);
