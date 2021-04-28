import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/restaurentOpen";
//import { Spacer } from "../../../components/spacer/spacer.component";
import { Spacer } from "../../../components/spacer/spacer-temp";
import { Text } from "../../../components/typography/text.component";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;
const SectionEnd = styled.Text`
  paddingLeft: ${(props) => props.theme.space[2]};
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Rating = styled.Text`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[1]};
flex: 1;
`;

const RestaurentCard = styled(Card)`
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  height:230;
`;
const RestaurentCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  height:140;
`;

export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    restaurentname = "Some Restaurent",
    icon,
    image = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
    ],
    address = "10 Downing Street, London",
    isOpenNow = true,
    isTemporarlyClosed = false,
    rating = "4",
  } = restaurent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurentCard elevation={5}>
      <RestaurentCardCover key={restaurentname} source={{ uri: image[0] }} />
      <Info>
        <Text variant="label">{restaurentname}</Text>
        <Section>
          <Rating>
            {ratingArray.map((index) => (
              <SvgXml xml={star} width="20" height="20" />
            ))}
          </Rating>
          <SectionEnd>
            {isTemporarlyClosed && (
              <Text variant="error"> TEMPORARLY CLOSED </Text>
            )}
            <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
        </Info>
    </RestaurentCard>
  );
};
