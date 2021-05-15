import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  top: 40px;
  position: absolute;
  z-index:999;
  width:100%
`;

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  //console.log(searchKeyword);

  useEffect(() => {
      setSearchKeyword(keyword);
  },[keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="enter the location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
