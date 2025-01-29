import { FC, useReducer, useState } from "react";
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";

type NumberInputProps = {
  label: string;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
};

export const NumberInput: FC<NumberInputProps> = ({
  label,
  onChange,
  max,
  min,
}) => {
  const [value, setValue] = useState(1);

  const isUnderMaxLimit = (value: number) => (max ? value < max : true);

  const isOverMinLimit = (value: number) => (min ? value > min : true);

  const onPress = (type: "increment" | "decrement") => {
    let newValue = value;
    if (type === "increment" && isUnderMaxLimit(newValue)) {
      newValue += 1;
    } else if (type === "decrement" && isOverMinLimit(value)) {
      newValue -= 1;
    }

    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            onPress("decrement");
          }}
        >
          <Text>-</Text>
        </TouchableHighlight>
        <TextInput
          style={styles.input}
          value={value.toString()}
          editable={false}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            onPress("increment");
          }}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 500,
    marginBottom: 5,
  },
  container: {
    flexDirection: "row",
  },
  button: {
    width: 40,
    borderWidth: 1,
    fontWeight: 500,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 50,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
