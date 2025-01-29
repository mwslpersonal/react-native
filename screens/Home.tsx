import { FC } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};
