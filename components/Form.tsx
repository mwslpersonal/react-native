import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { NumberInput } from "@/components/NumberInput";
import { Form as FormType } from "@/hooks/useForm";
import { FC, useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { PageTitle } from "./PageTitle";

type FormProps = {
  onSignUp: (form: FormType) => void;
};

export const Form: FC<FormProps> = ({ onSignUp }) => {
  const reducer = (
    state: FormType,
    {
      field,
      value,
    }: { field: "name" | "address" | "age"; value: string | number }
  ): FormType => {
    const currState = state;
    return {
      ...currState,
      [field]: value,
    };
  };

  const [form, setForm] = useReducer(reducer, {
    address: "",
    name: "",
    age: 1,
  });

  const nameValidation = (name: string) => {
    const hasNumber = !!name.match(/\d+/);
    if (hasNumber) return "Name can only contain letters!";
    return "";
  };

  return (
    <View style={styles.formContainer}>
      <PageTitle> Sign Up Form </PageTitle>

      <View style={styles.segmentContainer}>
        <Input
          label="Name"
          onChange={(value) => setForm({ field: "name", value })}
          rules={[nameValidation]}
        />
      </View>

      <View style={styles.segmentContainer}>
        <Input
          label="Address"
          onChange={(value) => setForm({ field: "address", value })}
        />
      </View>

      <View style={styles.segmentContainer}>
        <NumberInput
          label="Age"
          onChange={(value) => setForm({ field: "age", value })}
          min={1}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Sign Up" onPress={() => onSignUp(form)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
  },
  segmentContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    width: "30%",
    alignSelf: "flex-end",
  },
});
