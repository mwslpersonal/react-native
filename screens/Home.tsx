import { FormContainer } from "@/components/FormContainer";
import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <FormContainer />
    </SafeAreaView>
  );
};
