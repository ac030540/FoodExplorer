import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

const listIcon = (props, icon = "bread-slice") => {
  return <List.Icon {...props} icon={icon} />;
};

export const RestaurantDetailAccordion = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <ScrollView>
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => listIcon(props, "bread-slice")}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Bread" />
          <List.Item title="Eggs" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => listIcon(props, "hamburger")}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Pizza" />
          <List.Item title="Burger" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => listIcon(props, "food-fork-drink")}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Chole Bhature" />
          <List.Item title="Amritsari Kulche" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => listIcon(props, "glass-wine")}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};
