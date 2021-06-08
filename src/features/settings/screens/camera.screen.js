import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraProfile = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const type = Camera.Constants.Type.front;
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
      console.log(photo);
    }
  };

  return (
    <CameraProfile
      type={type}
      ref={(camera) => (cameraRef.current = camera)}
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={snap}>
        <InnerSnap />
      </TouchableOpacity>
    </CameraProfile>
  );
};
