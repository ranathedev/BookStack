import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const ShowCase2 = ({
  title,
  data,
  width,
  height,
  imgWidth,
  imgHeight,
  gap,
  theme,
  customClass,
  handleOnPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        theme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#16161a" },
      ]}
    >
      {title && (
        <Text
          style={[
            styles.title,
            theme === "light" ? { color: "#16161a" } : { color: "#fff" },
          ]}
        >
          {title}
        </Text>
      )}
      <FlatList
        contentContainerStyle={[styles.list, { gap: gap, ...customClass }]}
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", width: width, height: height }}>
            <Text
              style={[
                styles.label,
                theme === "light" ? { color: "#16161a" } : { color: "#f1f2f3" },
              ]}
              onPress={() => handleOnPress(item)}
            >
              {item.title}
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                handleOnPress(item);
              }}
            >
              <Image
                source={item.imgSrc}
                style={{ borderRadius: 15, width: imgWidth, height: imgHeight }}
              />
            </TouchableWithoutFeedback>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingVertical: 10, gap: 10 },
  label: {
    position: "absolute",
    zIndex: 10,
    fontSize: 20,
    fontWeight: "bold",
    top: 23,
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    width: "100%",
    marginLeft: 25,
    fontWeight: 600,
  },
  list: {
    paddingVertical: 30,
  },
});

ShowCase2.defaultProps = {
  width: 200,
  imgWidth: 170,
  imgHeight: 200,
  gap: 20,
};

export default ShowCase2;
