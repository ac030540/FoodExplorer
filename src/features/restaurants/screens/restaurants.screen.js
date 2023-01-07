import React, { useState } from "react";
import { View, SafeAreaView, StatusBar, Platform } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restaurant-info-card";

// StatusBar.currentHeight is not supported in iOS
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight + "px" : 0};
`;

const SearchbarContainer = styled(View)`
  padding: ${(props) => props.theme.spacing[3]};
`;

const RestaurantsListContainer = styled(View)`
  padding: ${(props) => props.theme.spacing[3]};
  flex: 1;
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  return (
    <SafeArea>
      <SearchbarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchbarContainer>
      <RestaurantsListContainer>
        <RestaurantsInfoCard />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
