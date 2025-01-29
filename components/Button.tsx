import { FC } from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export const Button: FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <>
      <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text>{label}</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#0096FF",
    backgroundColor: "#0096FF60",
    color: "white",
    padding: 10,
    alignItems: "center",
  },
});
