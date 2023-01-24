import React, { useContext, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { View } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/auth/auth.context";
import { useNavigation, useRoute } from "@react-navigation/native";

const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

const CameraButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  left: 38%;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <CameraContainer>
        <Text center>We need your permission to show the camera</Text>
        <Spacer size="large" />
        <Button onPress={requestPermission} mode="contained">
          Grant Permission
        </Button>
      </CameraContainer>
    );
  }

  const snap = async () => {
    if (cameraRef) {
      const snappedPhoto = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`@photo-${user.uid}`, snappedPhoto.uri);
      navigation.goBack();
    }
  };

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
        ratio={"16:9"}
      >
        <CameraButton mode="contained" icon="camera" onPress={snap}>
          Snap
        </CameraButton>
      </ProfileCamera>
    </CameraContainer>
  );
};
