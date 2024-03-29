import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const Input = ({
  props,
  name,
  isFocused,
  label,
  iconSrc,
  placeholder,
  placeholderColor,
  handleFocus,
  showHideIcon,
  hideText,
  setHideText,
  forgot,
  forgotOnPress,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={iconSrc} style={styles.icon} />
      <View style={styles.divider}></View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={placeholderColor}
        onFocus={() => handleFocus(`${name}`)}
        onBlur={props.handleBlur(`${name}`)}
        style={[
          styles.input,
          isFocused ? { borderColor: "#1e90ff" } : { borderColor: "#fff" },
        ]}
        cursorColor="#1e90ff"
        placeholder={placeholder}
        onChangeText={props.handleChange(`${name}`)}
        value={props.values[name]}
        secureTextEntry={hideText}
      />
      {showHideIcon && (
        <TouchableWithoutFeedback
          onPress={() => setHideText((state) => !state)}
        >
          <Image source={require("../assets/eye.png")} style={styles.eyeIcon} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          {props.touched[name] && props.errors[name]}
        </Text>
        {forgot && (
          <TouchableOpacity onPress={forgotOnPress}>
            <Text style={styles.desc}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 600,
    fontSize: 18,
    color: "#fff",
  },
  icon: {
    position: "absolute",
    top: 37,
    left: 5,
  },
  divider: {
    position: "absolute",
    width: 2,
    height: 25,
    top: 32,
    left: 26,
    backgroundColor: "#ccc",
  },
  input: {
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 32,
    fontSize: 18,
    minWidth: "100%",
    maxWidth: "100%",
    color: "#fff",
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  errorText: {
    color: "red",
    marginTop: 3,
    fontWeight: 500,
    width: "55%",
  },
  desc: {
    fontSize: 16,
    color: "#fff",
    textAlign: "right",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 40,
  },
});

Input.defaultProps = {
  label: "Username",
  iconSrc: require("../assets/person.png"),
  placeholder: "Your Name...",
  placeholderColor: "#fff",
  forgotOnPress: () => console.log("Button Pressed!"),
};

export default Input;
