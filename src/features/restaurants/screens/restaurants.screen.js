import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import RestaurantsInfoCard from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
