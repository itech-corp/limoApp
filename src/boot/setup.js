import * as Expo from "expo";
import * as Font from 'expo-font';
import React, { Component } from "react";
import { Provider } from "react-redux";
import { StyleProvider } from "native-base";
import AppContainer from "../App";
import configureStore from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import {PersistGate} from "redux-persist/integration/react";

const storeObj = {};
const robot = require("../../node_modules/native-base/Fonts/Roboto.ttf");
const robot_m = require("../../node_modules/native-base/Fonts/Roboto_medium.ttf");
const ionic = require("../../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf");
const poppins_r = require('../../assets/fonts/Poppins-Regular.ttf');
const poppins_b = require('../../assets/fonts/Poppins-Bold.ttf');
export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false
    };
    storeObj.store = this.state.store;
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Font.loadAsync({
      Roboto: robot,
      Roboto_medium: robot_m,
      Ionicons: ionic,
      'Poppins-Regular':poppins_r,
      'Poppins-Bold':poppins_b,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store.store}>
        <PersistGate persistor={this.state.store.persistor}>
          <AppContainer />
        </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
