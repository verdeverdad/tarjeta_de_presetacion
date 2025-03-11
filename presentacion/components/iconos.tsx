import React from "react";
import { View, StyleSheet } from "react-native";
import { Icono } from "@/components/icon";

interface IconosProps {
    onGithubPress: () => void;
    onPortfolioPress: () => void;
    onAtPress: () => void;
    onInstagramPress: () => void;
    onLinkedinPress: () => void;
  }
  
  export const Iconos = ({
    onGithubPress,
    onPortfolioPress,
    onAtPress,
    onInstagramPress,
    onLinkedinPress,
  }: IconosProps) => {
    return (
    <View style={styles.contenedorIconos}>
      <Icono icon="github" onPress={onGithubPress} />
      <Icono icon="globe" onPress={onPortfolioPress} />
      <Icono icon="at" onPress={onAtPress} />
      <Icono icon="instagram" onPress={onInstagramPress} />
      <Icono icon="linkedin" onPress={onLinkedinPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorIconos: { flexDirection: "row", marginVertical: 10, gap: 15 },
});