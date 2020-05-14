import React, {Component} from "react";
import {ImageBackground, Platform, StatusBar} from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Toast
} from "native-base";
import Icon2 from 'react-native-vector-icons/FontAwesome'
import {Field, reduxForm} from "redux-form";
import styles from "./styles";
import Carousel from '../../components/Carousel/Carousel';

const commonColor = require("../../theme/variables/commonColor");
const backgroundImage = require("../../../assets/glow2.png");
const logo = require("../../../assets/logo.png");

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

declare type Any = any;
class LoginForm extends Component {
  

  

  login() {
    if (this.props.valid) {
      this.props.navigation.navigate("Drawer");
    } else {
      Toast.show({
        text: "Enter Valid Username & Password!",
        duration: 2500,
        position: "top",
        textStyle: {textAlign: "center"}
      });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar
        backgroundColor={
            Platform.OS === "android"
              ? commonColor.statusBarColor
              : "transparent"
          }
          barStyle="light-content"
        />
        <Content style={{backgroundColor: commonColor.containerBackground}}>
          <ImageBackground
            source={backgroundImage}
            style={styles.containerImage}
          >
            <ImageBackground source={logo} style={styles.logoShadowImage}>
              <View style={styles.bgView}>
                <Carousel/>
                <Button
                  light
                  block
                  style={{marginBottom: 10,backgroundColor:'#F5A10E'}}
                  onPress={() => this.login()}
                >
                  <Text style={{color: '#fff'}}>Proceed <Icon2 name="sign-in" color="#fff" size={20} /></Text>
                </Button>
              </View>
            </ImageBackground>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const Login = reduxForm({
  form: "login"
})(LoginForm);
export default Login;
