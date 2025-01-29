import useForm from "@/hooks/useForm";
import { FC, useReducer, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: FC = () => {
  const { signUpUser } = useForm();

  const [nameError, setNameError] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useReducer(
    (state: number, type: "increment" | "decrement"): number => {
      if (type === "increment") {
        return state + 1;
      }

      return state > 1 ? state - 1 : state;
    },
    1
  );

  const nameValidation = (name: string) => {
    const hasNumber = name.match(/\d+/);
    if (hasNumber) {
      setNameError(true);
    } else {
      setName(name);
      setNameError(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <Text style={styles.title}> Sign Up Form </Text>
        <View style={styles.segmentContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} onChangeText={nameValidation} />
          {nameError && (
            <Text style={styles.error}>Name can only contain letters!</Text>
          )}
        </View>

        <View style={styles.segmentContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} onChangeText={setAddress} />
        </View>

        <View style={styles.segmentContainer}>
          <Text style={styles.label}>Age</Text>
          <View style={styles.ageContainer}>
            <TouchableHighlight
              style={styles.ageButton}
              onPress={() => {
                setAge("decrement");
              }}
            >
              <Text>-</Text>
            </TouchableHighlight>
            <TextInput
              style={styles.ageInput}
              value={age.toString()}
              editable={false}
            />
            <TouchableHighlight
              style={styles.ageButton}
              onPress={() => {
                setAge("increment");
              }}
            >
              <Text>+</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              signUpUser({ name, address, age });
            }}
          >
            <Text>Sign Up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
  },
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
  segmentContainer: {
    marginBottom: 10,
  },
  ageContainer: {
    flexDirection: "row",
  },
  ageButton: {
    width: 40,
    borderWidth: 1,
    fontWeight: 500,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  ageInput: {
    width: 50,
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#0096FF",
    backgroundColor: "#0096FF60",
    color: "white",
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    width: "30%",
    alignSelf: "flex-end",
  },
});
