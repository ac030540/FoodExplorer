import React, { useContext } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const icon = (name) => <List.Icon icon={name} color="black" />;

const ListItem = styled(List.Item)`
  padding: ${(props) => props.theme.spacing[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.spacing[3]};
`;

const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthContext);
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  return (
    <>
      <AvatarContainer>
        <AvatarIcon size={150} icon="human" />
        <Spacer size="large">
          <Text>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <ListItem
          title="Favourites"
          description="View your favourites"
          left={() => icon("heart")}
          onPress={() => navigation.navigate("Favourites")}
        />
        <ListItem
          title="Logout"
          left={() => icon("door")}
          onPress={() => onLogout()}
        />
      </List.Section>
    </>
  );
};
