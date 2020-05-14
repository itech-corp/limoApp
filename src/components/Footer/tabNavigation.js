import React from "react";
import { Icon, FooterTab, Button, Footer as FTab } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Spinner from "../../screens/Spinner/";
import ProgressBar from "../../screens/Progressbar/";
import CalendarNSP from "../../screens/Calendar/";
import Form from "../../screens/Form/";
import Home from "../../screens/Home/";
import styles from "./styles";
import variable from "../../theme/variables/platform";

const FooterTabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: ({ screenProps, navigation }) => <Home navigation={navigation} />
    },
    Spinner: {
      screen: ({ screenProps, navigation }) =>
        <Spinner navigation={navigation} />
    },
    ProgressBar: {
      screen: ({ screenProps, navigation }) =>
        <ProgressBar navigation={navigation} />
    },
    Calendar: {
      screen: ({ screenProps, navigation }) =>
        <CalendarNSP navigation={navigation} />
    },
    Form: {
      screen: ({ screenProps, navigation }) => <Form navigation={navigation} />
    }
  },
  {
    tabBarPosition: "bottom",
    lazy: true,
    tabBarComponent: props => {
      return (
        <FTab style={{backgroundColor:"#616D74"}}>
          <FooterTab style={styles.footer}>
            <Button onPress={() => props.navigation.navigate("Calendar")}>
              <Icon name="calendar" style={{ color: "#fff" }} />
            </Button>
            <Button onPress={() => props.navigation.navigate("Form")}>
              <Icon name="paper" style={{ color: "#fff" }} />
            </Button>
            <Button onPress={() => props.navigation.navigate("Home")}>
              <Icon name="add-circle" style={{ color: "#fff" }} />
            </Button>
            <Button onPress={() => props.navigation.navigate("ProgressBar")}>
              <Icon active name="options" style={{ color: "#fff" }} />
            </Button>
            <Button onPress={() => props.navigation.navigate("Spinner")}>
              <Icon name="ios-refresh-circle" style={{ color: "#fff" }} />
            </Button>
          </FooterTab>
        </FTab>
      );
    }
  }
);

export default FooterTabNavigation;
