import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
