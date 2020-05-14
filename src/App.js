import React from "react";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Root } from "native-base";
import Login from "./screens/Login";
import Plan from "./screens/Plan";
import SignUp from "./screens/SignUp";
import SideBar from "./screens/Sidebar";
import Inbox from "./screens/Inbox/";
import Mail from "./screens/Mail/";
import Compose from "./screens/Compose/";
import Icons from "./screens/Icons/";
import ProgressBar from "./screens/Progressbar/";
import Spinner from "./screens/Spinner/";
import Contacts from "./screens/Contact/";
import Calendar from "./screens/Calendar/";
import Calculation from "./screens/Calculation";
import Form from "./screens/Form/";
import ModalNSP from "./screens/Modal/";

import FooterTabNavigation from "./components/Footer/tabNavigation";

const Drawer = createDrawerNavigator(
  {
    FooterTabNavigation: { screen: FooterTabNavigation },
    Inbox: { screen: Inbox },
    Mail: { screen: Mail },
    Compose: { screen: Compose },
    Icons: { screen: Icons },
    ProgressBar: { screen: ProgressBar },
    Contacts: { screen: Contacts },
    Spinner: { screen: Spinner },
    Calendar: { screen: Calendar },
    Form: { screen: Form },
    Calculation:{screen:Calculation},
    ModalNSP: { screen: ModalNSP }
  },
  {
    initialRouteName: "FooterTabNavigation",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const App = createStackNavigator(
  {
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Drawer: { screen: Drawer },
    Plan: { screen: Plan },
   
  },
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(App);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
