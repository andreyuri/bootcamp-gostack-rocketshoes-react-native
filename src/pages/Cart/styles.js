import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  padding: 15px 20px;
  margin: 15px;
  border-radius: 4px;
`;

export const Products = styled.View``;
export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInfoImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ProductDetailsTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #333;
`;

export const ProductDetailsPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductSubTotal = styled.View`
  background: #eee;
  padding: 5px 20px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const ProductSubTotalAmount = styled.TextInput.attrs({
  readOnly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const ProductSubTotalControlButton = styled.TouchableOpacity``;

export const Total = styled.View`
  align-items: center;
  margin: 10px 0;
`;

export const TotalTitle = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 32px;
`;

export const Order = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 10px 15px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  text-transform: uppercase;
  color: #fff;
`;
