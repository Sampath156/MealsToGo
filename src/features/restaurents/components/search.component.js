import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

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
