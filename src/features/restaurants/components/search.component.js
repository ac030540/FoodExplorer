import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";

const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
`;

export const Search = ({ toggleFavouritesBar, showFavouritesBar }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchbarContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        icon={showFavouritesBar ? "heart" : "heart-outline"}
        onIconPress={toggleFavouritesBar}
      />
    </SearchbarContainer>
  );
};
