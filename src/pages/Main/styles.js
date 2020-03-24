import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
  height: 50%;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text.attrs({ numberOfLines: 1 })`
  color: #333333;
  font-size: 16px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const AddButtom = styled(RectButton)`
  background: #7159c1;
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
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AddButtomProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
