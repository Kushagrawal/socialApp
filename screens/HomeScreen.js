import React, { Children } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Platform
} from "react-native";
// import ImageSlider from "react-native-elastic-image-slider";
import MediumClap from "react-native-medium-clap";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

posts = [
  {
    id: "1",
    name: "Joe McKay",
    text: "OOTY | INDIA - QUEEN OF HILL STATION",
    timestamp: 1569109273726,
    avatar: require("../assets/avatar1.png"),
    image: require("../assets/Ooty.jpg")
  },
  {
    id: "2",
    name: "Karyn Kim",
    text:
      "Goa is not only the land of beaches or city of churches, it's a feeling that defines thrill in the most amazing way",
    timestamp: 1569109273726,
    avatar: require("../assets/avatar2.png"),
    image: require("../assets/Goa.jpg")
  },
  {
    id: "3",
    name: "Emerson Parsons",
    text:
      "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
    timestamp: 1569109273726,
    avatar: require("../assets/avatar3.png"),
    image: require("../assets/image2.jpg")
  },
  {
    id: "4",
    name: "Kathie Malone",
    text:
      "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
    timestamp: 1569109273726,
    avatar: require("../assets/sampleAvatar.jpeg"),
    image: require("../assets/image3.jpg")
  }
];

export default class HomeScreen extends React.Component {
  renderPost = post => {
    const onClapIncrease = clap => console.log(`Number of Claps: ${clap}`);
    return (
      <View>
        <View style={styles.topShadow}>
          <View style={styles.bottomShadow}>
            <View style={styles.feedItem}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.topShadow}>
                  <View style={styles.bottomShadow}>
                    <Image source={post.avatar} style={styles.avatar} />
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <View>
                      <Text style={styles.name}>{post.name}</Text>
                      <Text style={styles.timestamp}>
                        {moment(post.timestamp).fromNow()}
                      </Text>
                    </View>
                    <Ionicons name="ios-more" size={24} color="#73788B" />
                  </View>
                </View>
              </View>

              <View
                style={[
                  styles.postImageStyle,
                  { marginHorizontal: 5, marginVertical: 16 }
                ]}
              >
                <View
                  style={[
                    styles.topShadow,
                    Platform.OS === "android" && {
                      backgroundColor: "#24304c"
                    }
                  ]}
                >
                  <View
                    style={[
                      styles.bottomShadow,
                      Platform.OS === "android" && {
                        backgroundColor: "#24304c"
                      }
                    ]}
                  >
                    <Image
                      source={post.image}
                      style={styles.postImage}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </View>
              <Text style={styles.post}>{post.text}</Text>

              <View
                style={[
                  styles.topShadow,
                  Platform.OS === "android" && {
                    backgroundColor: "#24304c"
                  }
                ]}
              >
                <View
                  style={[
                    styles.bottomShadow,
                    Platform.OS === "android" && {
                      backgroundColor: "#24304c"
                    }
                  ]}
                >
                  <View style={styles.divider} />
                </View>
              </View>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <MediumClap
                  onClapIncrease={onClapIncrease}
                  color="#D5E1EB"
                  clapSize={30}
                  translateY={30}
                  countRadius={15}
                  countTextStyle={{ fontSize: 16, color: "black" }}
                  maxClapCount={45}
                />

                <Text style={styles.name2}>1.5K</Text>
                <View style={{ marginLeft: 25, marginTop: 5 }}>
                  <Ionicons name="ios-chatbubbles" size={24} color="#D5E1EB" />
                </View>
                <Text style={styles.name2}>200</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TRENDING</Text>
        </View>

        <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({ item }) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24304c"
  },
  header: {
    paddingTop: 20,
    paddingBottom: 16,
    marginTop: 20,
    backgroundColor: "#24304c",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#EBECF4",
    shadowColor: "#24304c",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 18,
    color: "#EBECF4",
    fontWeight: "700"
  },
  feed: {
    marginHorizontal: 16
  },
  feedItem: {
    backgroundColor: "#34425e",
    borderRadius: 5,
    padding: 8,
    shadowOpacity: 1 / 10,
    shadowRadius: 10,
    shadowColor: "black",
    elevation: 10,
    marginTop: 10,
    shadowOffset: { width: 2, height: -2, width: -2, height: 2 }
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 16
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#E4F2FF"
  },
  name2: {
    fontSize: 10,
    fontWeight: "700",
    marginTop: 12,
    marginLeft: 5,
    color: "#E4F2FF"
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  post: {
    marginTop: 16,
    marginBottom: 15,
    marginBottom: 15,
    fontWeight: "500",
    fontSize: 14,
    color: "#C3E2FF"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5
  },
  postImageStyle: {
    shadowOpacity: 2 / 10,
    shadowRadius: 10,
    shadowColor: "black",
    elevation: 10,
    shadowOffset: { width: 2, height: -2, width: -2, height: 2 }
  },
  divider: {
    backgroundColor: "#7DA1C2",
    height: 1 / 3,
    shadowOpacity: 1 / 10,
    shadowRadius: 20,
    shadowColor: "black",
    elevation: 10,
    shadowOffset: { width: 2, height: -2, width: -2, height: 2 }
  },
  inner: {
    backgroundColor: "#DEE9F7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 24,
    shadowColor: "#24304c"
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 24,
    shadowColor: "#24304c"
  },
  playing: {
    color: "grey",
    fontWeight: "800"
  }
});
