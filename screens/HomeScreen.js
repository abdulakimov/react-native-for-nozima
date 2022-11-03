// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import rightArrow from "../assets/icons/right-arrow.png";
import handHeart from "../assets/icons/hand-heart.webp";
import handHeart2 from "../assets/icons/heart-hand.png";
import handHeart3 from "../assets/icons/chat-heart.webp";
import loverHands from "../assets/icons/lover-hands.webp";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

const HomeScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              paddingTop: 100,
              paddingHorizontal: 30,
              fontSize: 86,
              fontWeight: "bold",
            }}
          >
            {item?.title}
          </Text>
          <Text
            style={
              item.isStarter
                ? { paddingHorizontal: 30, fontSize: 30, fontWeight: "bold" }
                : {
                    paddingHorizontal: 30,
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }
            }
          >
            {item.text}
          </Text>
          <Image
            resizeMode="cover"
            style={{
              width: 350,
              height: 350,
              alignSelf: "center",
              marginTop: 50,
            }}
            source={item.image}
          />
        </View>
        <View
          style={{
            paddingBottom: 100,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.isEnd ? (
            <TouchableOpacity onPress={onDone}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "#97BDFE",
                }}
              >
                Click me
              </Text>
            </TouchableOpacity>
          ) : (
            <>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "#97BDFE",
                }}
              >
                swipe right
              </Text>
              <Image
                source={rightArrow}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 40,
                  tintColor: "#97BDFE",
                }}
              />
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            backgroundColor: "#97BDFE",
            padding: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 45,
                textAlign: "center",

                marginBottom: 40,
                fontWeight: "bold",
              }}
            >
              I really and with my deep heart I love you❤️
            </Text>
            <Image
              source={loverHands}
              resizeMode="cover"
              style={{ width: 350, height: 250 }}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          //   showSkipButton={true}
          onSkip={onSkip}
          showNextButton={false}
          showPrevButton={false}
          showSkipButton={false}
          dotStyle={{ backgroundColor: "transparent" }}
          activeDotStyle={{ backgroundColor: "transparent" }}
          doneLabel="Done"
        />
      )}
    </>
  );
};

export default HomeScreen;

const slides = [
  {
    key: "s1",
    isStarter: true,
    text: "Nozima😇",
    title: "Hello,",
    image: handHeart,
  },
  {
    key: "s3",
    text: "I did it only for you to express my love🥰. Please, accept it",
    image: handHeart2,
  },
  {
    key: "s6",
    isEnd: true,
    text: "I appreciate your answer either positive or negative🥹",
    image: handHeart3,
  },
];
