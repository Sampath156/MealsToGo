import styled from "styled-components";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  paddingLeft: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;
export const SectionEnd = styled.Text`
  paddingLeft: ${(props) => props.theme.space[2]};
  flex: 0.8;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;
export const Rating = styled.Text`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex: 1;
`;

export const RestaurentCard = styled(Card)`
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  height: 230px;
`;
export const RestaurentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  height: 140px;
`;