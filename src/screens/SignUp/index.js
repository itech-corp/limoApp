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

  nextStep() {
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
                <View style={{flexDirection:'row',alignSelf:'center',marginBottom:30}}>
                  <Button
                    light
                    transparent
                    onPress={() => this.props.navigation.navigate("Login")}
                    style={{
                      height:'90%',
                      borderRightWidth:0.5,
                      borderColor:'#F5A10E',
                      marginBottom: Platform.OS === "ios" ? 5 : 0,
                      marginTop: Platform.OS === "ios" ? -10 : 0
                    }}
                  >
                    <Text style={{fontFamily:'Poppins-Bold',color:'grey'}}>Sign In</Text>
                  </Button>
                  <Button
                    light
                    transparent
                    onPress={() => this.props.navigation.navigate("SignUp")}
                    style={{
                      height:'90%',
                      marginBottom: Platform.OS === "ios" ? 5 : 0,
                      marginTop: Platform.OS === "ios" ? -10 : 0
                    }}
                  >
                    <Text style={{fontFamily:'Poppins-Bold',fontSize:17}}>Sign Up</Text>
                  </Button>
                  
                </View>
                <Field
                  show={this.state.currentStep === 1?true:false}
                  name="first"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="First Name"
                />
                <Field
                  show={this.state.currentStep === 1?true:false}
                  name="last"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="Last Name"
                />
                <Field
                  show={this.state.currentStep === 2?true:false}
                  name="userName"
                  component={this.renderInput}
                  type="text"
                  validate={[required]}
                  label="Username"
                />
                <Field
                  show={this.state.currentStep === 2?true:false}
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[email, required]}
                  label="Email"
                />
                <Field
                  show={this.state.currentStep === 3?true:false}
                  name="country"
                  component={this.renderInput}
                  type="picker"
                  validate={[required]}
                  label="Country"
                />
                <Field
                  show={this.state.currentStep === 3?true:false}
                  name="phone"
                  component={this.renderInput}
                  type="number"
                  validate={[required]}
                  label="237"
                />
                <Field
                  show={this.state.currentStep === 4?true:false}
                  name="password"
                  component={this.renderInput}
                  type="password"
                  validate={[alphaNumeric, minLength8, maxLength15, required]}
                  label="Password"
                />
                <Field
                  show={this.state.currentStep === 4?true:false}
                  name="password"
                  component={this.renderInput}
                  type="password"
                  validate={[alphaNumeric, minLength8, maxLength15, required]}
                  label="Repeat Password"
                />
                <Button
                  light
                  block
                  style={{marginBottom: 10,backgroundColor:'#F5A10E'}}
                  onPress={() => this.nextStep()}
                >
                  <Text style={{color: '#fff'}}>{this.state.currentStep >= 4 ?'Finish':'Next'} <Icon2 name="sign-in" color="#fff" size={20} /></Text>
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
