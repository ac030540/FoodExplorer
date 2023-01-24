import React, { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import { List } from "react-native-paper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

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
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (uid) => {
    const currentPhoto = await AsyncStorage.getItem(`@photo-${uid}`);
    setPhoto(currentPhoto);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user.uid);
    }, [user])
  );

  return (
    <>
      <AvatarContainer>
        <Pressable
          onPress={() => navigation.navigate("Camera")}
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
        >
          {photo ? (
            <Avatar.Image size={150} source={{ uri: photo }} />
          ) : (
            <AvatarIcon size={150} icon="human" />
          )}
        </Pressable>
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
