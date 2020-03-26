import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`/products`);

    this.setState({ products: response.data });
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
