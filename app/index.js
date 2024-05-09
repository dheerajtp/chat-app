import { Redirect } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return <Redirect href="/(home)/(tabs)"/>;
};

export default Home;
