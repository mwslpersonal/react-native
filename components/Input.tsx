import { FC, useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";

type InputProps = {
  label: string;
  onChange: (value: string) => void;
  rules?: Array<(value: string) => string>;
};

export const Input: FC<InputProps> = ({ label, onChange, rules }) => {
  const [error, setError] = useState("");

  const onChangeText = (value: string) => {
    let errorMessage = "";
    if (rules) {
      for (const rule of rules) {
        errorMessage = rule(value);
        if (errorMessage) break;
      }
    }

    if (errorMessage) {
      setError(errorMessage);
    } else {
      onChange(value);
      setError("");
    }
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} />
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
  },
  label: {
    fontWeight: 500,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 10,
  },
});
