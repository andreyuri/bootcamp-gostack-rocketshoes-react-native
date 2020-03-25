import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text.attrs({ numberOfLines: 1 })`
  font-size: 16px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const AddButtom = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin: 10px 0;
`;

export const AddButtomText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const AddButtomProductAmount = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AddButtomProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
