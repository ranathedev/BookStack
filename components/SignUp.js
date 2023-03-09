import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import BackgroundImage from "./BackgroundImage";
import Input from "./input";
import Button from "./Button";

const SignUp = ({ setShowSignIn }) => {
  const [isFocused, setIsFocused] = useState({
    username: false,
    email: false,
    password: false,
  });
  const [hideText, setHideText] = useState(true);

  const formSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(7, "Password must be at least 7 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        "Password must contain at least one special character"
      ),
  });

  const handleFocus = (name) => {
    setIsFocused((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === name;
      });
      return newState;
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <BackgroundImage
        src={require("../assets/background-3.png")}
        customClass={{
          flex: 0,
          borderRadius: 20,
          overflow: "hidden",
        }}
        blurRadius={5}
        child={
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Get Started</Text>
              <View style={styles.descContainer}>
                <Text style={styles.desc}>Already have an account?</Text>
                <View>
                  <Text
                    style={styles.signIn}
                    onPress={() => setShowSignIn(true)}
                  >
                    Sign In
                  </Text>
                  <View style={styles.underline}></View>
                </View>
              </View>
            </View>
            <View>
              <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={formSchema}
                onSubmit={(values, actions) => {
                  actions.resetForm();
                  console.log(values);
                  setShowSignIn(true);
                }}
              >
                {(props) => (
                  <View style={styles.form}>
                    <Input
                      isFocused={isFocused.username}
                      name="username"
                      props={props}
                      handleFocus={handleFocus}
                    />
                    <Input
                      isFocused={isFocused.email}
                      props={props}
                      name="email"
                      label="Email"
                      placeholder="Your Email..."
                      iconSrc={require("../assets/mail.png")}
                      handleFocus={handleFocus}
                    />
                    <Input
                      isFocused={isFocused.password}
                      props={props}
                      name="password"
                      label="Password"
                      placeholder="Your Password"
                      iconSrc={require("../assets/lock.png")}
                      handleFocus={handleFocus}
                      showHideIcon={true}
                      hideText={hideText}
                      setHideText={setHideText}
                    />

                    <Button
                      background="#1e90ff"
                      width={200}
                      fontSize={20}
                      btnText="Create Account"
                      fontWeight={700}
                      borderRadius={50}
                      onPress={props.handleSubmit}
                      customClass={{ paddingVertical: 8 }}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </View>
        }
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    gap: 30,
  },
  header: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    color: "#fff",
  },
  descContainer: {
    flexDirection: "row",
    gap: 5,
  },
  desc: {
    fontSize: 16,
    color: "#fff",
  },
  signIn: {
    position: "relative",
    color: "#1e90ff",
    fontSize: 16,
    fontWeight: 600,
  },
  underline: {
    position: "absolute",
    bottom: 2,
    minWidth: 50,
    minHeight: 1.5,
    backgroundColor: "#1e90ff",
  },
  form: {
    gap: 10,
    alignItems: "center",
  },
});

export default SignUp;
