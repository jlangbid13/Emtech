import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Logins')}

          style={styles.bellContainer}
        >
          <Image
            style={[styles.button, { width: 30, height: 30 }]}
            source={require("./assets/line.png")}
          />
        </TouchableOpacity>
        <Text style={styles.register}>WeatherEats</Text>
        <TouchableOpacity
          onPress={() => {
            // Handle right bell icon press here
          }}
          style={styles.bellContainer}
        >
          <Image
            style={[styles.button, { width: 40, height: 40 }]}
            source={require("./assets/bell.png")}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.today}>Weather Today</Text>

      {/* Add the four images below the text */}
      <View style={styles.imageContainer}>
        {/* First pair of images */}
        <View style={styles.imagePair}>
          <Image
            style={[styles.weatherImage, { width: 100, height: 100 }]}
            source={require("./assets/24.png")}
          />
          <Image
            style={[styles.weatherImage, { width: 100, height: 100, marginLeft: 20 }]}
            source={require("./assets/cloud.png")}
          />
        </View>
        {/* Second pair of images */}
        <View style={styles.imagePair}>
          <Image
            style={[styles.weatherImage, { width: 170, height: 170 }]}
            source={require("./assets/WeatherEats.png")}
          />
          <Image
            style={[styles.weatherImage, { width: 170, height: 170, marginLeft: 20 }]}
            source={require("./assets/WeatherEats.png")}
          />
        </View>
      </View>

      {/* White container with text */}
      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsText}>Food Recommendations</Text>
        {/* Add the two images and text below */}
        <View style={styles.recommendationPair}>
          <View style={styles.recommendationImageContainer}>
            <Image
              style={styles.recommendationImage}
              source={require("./assets/WeatherEats.png")}
            />
          </View>
          <Text style={styles.recommendationText}>Dish 1</Text>
        </View>
        <View style={styles.recommendationPair}>
          <View style={styles.recommendationImageContainer}>
            <Image
              style={styles.recommendationImage}
              source={require("./assets/WeatherEats.png")}
            />
          </View>
          <Text style={styles.recommendationText}>Dish 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0077B6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  register: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginLeft: 60,
    marginRight: 80,
  },
  today: {
    fontSize: 15,
    color: "white",
    marginLeft: 60,
    marginRight: 80,
    marginTop: 60,
  },
  bellContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 20,
    marginLeft: 40,
  },
  imagePair: {
    flexDirection: "row",
    marginTop: 20,
  },
  weatherImage: {},
  recommendationsContainer: {
    backgroundColor: "#E3F0F6",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 20, // Add space between recommendations and images
  },
  recommendationsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077B6",
  },
  recommendationPair: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10, // Add space between recommendation pairs
  },
  recommendationImageContainer: {
    flexDirection: "row",
    alignItems: "space-between",
  },
  recommendationImage: {
    width: 80,
    height: 80,
    marginRight: 10, // Add space between image and text
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
