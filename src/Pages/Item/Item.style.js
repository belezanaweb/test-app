import styled from 'styled-components/native';

import { Colors, Layout } from '../../Styleguide';

export const Wrapper = styled.View`
  ${Layout.Type.wrapper};
  flex: 1;
  background: ${Colors.lightGrey};
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  background: ${Colors.white};
  height: 210px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 1.4px;
  elevation: 2;
  margin-bottom: 20px;
`;

export const ProductImageWrapper = styled.View`
  width: 35%;
  height: 100%;
  padding: 10px 0 10px 10px;
  align-items: center;
`;

export const ProductDescriptionWrapper = styled.View`
  flex: 1;
  width: 65%;
  height: 100%;
  padding: 10px;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  height: 200px;
  max-height: 200px;
  margin-bottom: 10px;
  resize-mode: stretch;
`;

export const ContainerContent = styled.View`
  background: ${Colors.white};
  border-radius: 8px;
  padding: 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 1.4px;
  elevation: 2;
`;

export const ContainerList = styled.ScrollView`
  margin-bottom: 20px;
`;

export const BoxPrices = styled.View`
  flex-basis: 50%;
`;

export const BoxSku = styled.View`
  flex-basis: 50%;
  align-items: flex-end;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ContainerActions = styled.View`
  margin-top: 20px;
`;

export const ModalBuy = styled.Modal`
  ${Layout.Type.wrapper};
`;

export const ModalWarn = styled.Modal`
  ${Layout.Type.wrapper};
`;

export const ModalWrapper = styled.ScrollView`
  ${Layout.Type.wrapper};
`;

export const ModalHeader = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom-color: ${Colors.black50};
  border-bottom-width: 1px;
`;

export const ModalTitle = styled.Text`
  ${Layout.Type.wrapper};
  padding-left: 0;
  color: ${Colors.black};
  flex: 1;
  font-size: 22px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`

`;

export const InputEmail = styled.TextInput`
  ${Layout.Type.wrapper};
  padding-bottom: 5px;
  padding-left: 0;
  font-size: 18px;
  color: ${Colors.primary};
  border-bottom-color: ${Colors.primary};
  border-bottom-width: 2px;
  margin-bottom: 15px;
`;
