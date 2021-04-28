import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/restaurentOpen";
//import { Spacer } from "../../../components/spacer/spacer.component";
import { Spacer } from "../../../components/spacer/spacer-temp";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  Section,
  Address,
  SectionEnd,
  Rating,
  RestaurentCard,
  RestaurentCardCover,
} from "../components/restaurent-info-card.styles";


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
