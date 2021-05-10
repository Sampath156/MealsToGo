import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/restaurentOpen";
import { Spacer } from "../../../components/spacer/spacer-temp";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  Icon,
  Section,
  Address,
  SectionEnd,
  Rating,
  RestaurentCard,
  RestaurentCardCover,
} from "../components/restaurent-info-card.styles";


export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    restaurantname = "Some Restaurent",
    icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
    ],
    address = "10 Downing Street, London",
    isOpenNow = true,
    isTemporarlyClosed = false,
    rating = 3,
    placeID,
  } = restaurent;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  
  return (
    <RestaurentCard elevation={5}>
      <RestaurentCardCover key={restaurantname} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{restaurantname}</Text>
        <Section>
         <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeID}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isTemporarlyClosed && (
              <Text variant="error"> TEMPORARLY CLOSED </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            
              <Icon source={{ uri: icon }} />
            
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
        </Info>
    </RestaurentCard>
  );
};
