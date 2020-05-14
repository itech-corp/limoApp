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
  Toast,
  Header,
  Left,
  Body,
  Title,
  Right,
} from "native-base";
import Icon2 from 'react-native-vector-icons/FontAwesome'
import {Field, reduxForm} from "redux-form";
import styles from "./styles";
import ResultCard from '../../components/ResultCard/ResultCard';
import HeaderCard from '../../components/Card/Card';

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
  textInput: Any;

  state={
    currentStep:1,
    calculating:false,
    calculated:false
  }

  renderInput({input,show, label, type, meta: {touched, error, warning}}) {
    return (
      show?
      <View>
        <Item  error={error && touched} style={styles.inputGrp}>
          <Icon
            active
            name={input.name === ("userName"||"first"||"last") ? "md-person" :input.name === "email"?"md-mail" :"unlock"}
            style={{ color: "#F5A10E",borderRightWidth:.3,padding:12,paddingRight:20,paddingLeft:20,borderRightColor:'rgba(255,255,255,.2)'}}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="rgba(230,230,230,0.8)"
            style={styles.input}
            placeholder={label}
            secureTextEntry={input.name === "password" ? true : false}
            name={input.name}
            onBlur={input.onBlur}
            selectionColor="#023"
            onChange={input.onChange}
            onDrop={input.onDrop}
            onFocus={input.onFocus}
            onDragStart={input.onDragStart}
            defaultValue={input.value}
          />
          {touched && error ? (
            <Icon
              active
              style={styles.formErrorIcon}
              onPress={() => this.textInput._root.clear()}
              name="close"
            />
          ) : (
            <Text />
          )}
        </Item>
        {touched && error ? (
          <Text style={styles.formErrorText1}>{error}</Text>
        ) : (
          <Text style={styles.formErrorText2}>error here</Text>
        )}
      </View>
      :null
    );
  }

  calculate() {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3? 4 : currentStep+1;
    this.setState({currentStep})
  }

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
    const navigation = this.props.navigation;
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
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => navigation.openDrawer()}
                >
                  <Icon active name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Calculation</Title>
              </Body>
              <Right />
            </Header>
              <View style={[styles.bgView,{display:'none'}]}>
                <View style={{flexDirection:'column',alignSelf:'center',marginBottom:30}}>
                  <Text style={{fontSize:17,fontFamily:'Poppins-Regular',marginBottom:30}}>Please fill the form below to get started</Text>
                  <Text style={{fontSize:15,fontFamily:'Poppins-Regular'}}>You have 3 calculation remaining</Text>
                </View>
                <Field
                  show={false}
                  name="first"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="First Name"
                />
                <Field
                  show={false}
                  name="last"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="Last Name"
                />
                <Field
                  show={false}
                  name="userName"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="Username"
                />
               
                <Button
                  light
                  block
                  style={{marginBottom: 10,backgroundColor:'#F5A10E'}}
                  onPress={() => this.calculate()}
                >
                  <Text style={{color: '#fff'}}>Calculate investment <Icon2 name="sign-in" color="#fff" size={20} /></Text>
                </Button>
              </View>
              <View >
                  <View>
                      <HeaderCard/>
                  </View>
                  <View >
                    <ResultCard/>
                   <View style={{alignSelf:'center',marginBottom:20}}><Button style={{width:200 ,justifyContent:"center"}} bordered warning><Text>Go Back</Text></Button></View>
                  </View>
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
