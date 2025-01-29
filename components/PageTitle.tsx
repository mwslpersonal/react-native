import { FC } from "react";
import { StyleSheet, Text } from "react-native";

type PageTitleProps = {
  children: string;
};

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <>
      <Text style={styles.title}> {children} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
  },
});
