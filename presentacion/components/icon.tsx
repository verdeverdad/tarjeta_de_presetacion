// components/Iconos.tsx
import React from "react";
import { Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

interface IconoProps {
  icon: "github" | "globe" | "at" | "instagram" | "linkedin";
  size?: number;
  color?: string;
  activeColor?: string;
  onPress: () => void;
}

export const Icono = ({
  icon,
  size = 24,
  color = "#6dd7b8",
  activeColor = "blue",
  onPress,
}: IconoProps) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <FontAwesome6
          name={icon}
          size={size}
          color={pressed ? activeColor : color}
        />
      )}
    </Pressable>
  );
};