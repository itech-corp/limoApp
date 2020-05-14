import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  
  ListItem,
  Content,
  Left,
  Body,
  Right,
  Thumbnail,
  Badge
} from "native-base";
import { NavigationActions , StackActions} from "react-navigation";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";
const logo = require("../../../assets/icon12.png");
const profile = require("../../../assets/contacts/atul.png");
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});

class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content style={{ backgroundColor: "#000C2C" }}>
        <Thumbnail
          style={{
            alignSelf: "center",
            height: 200,
            width: 200,
            marginTop: 20,
            marginBottom: 15,
            resizeMode:'contain'
          }}
          square
          source={logo}
        />
        <Thumbnail
          style={{
            alignSelf: "center",
            height: 50,
            width: 50,
            marginTop: -30,
            marginBottom: 15,
            resizeMode: "center",
            borderRadius:25,
          }}
          square
          source={profile}
        />

        <ListItem
          button
          icon
          onPress={() => {
            navigation.navigate("FooterTabNavigation");
            navigation.closeDrawer();
          }}
          style={styles.links}
        >
          <Left>
            <Icon name="tachometer-alt" color="white" size={20} />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Dashboard</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.navigate("Inbox");
            navigation.closeDrawer();
          }}
          style={styles.links}
        >
          <Left>
            <Icon active name="address-card"  color="white" size={20}/>
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Subscription Plan</Text>
          </Body>
          <Right>
            <Badge style={{ marginBottom: 8 }}>
              <Text style={{fontFamily:'Poppins-Regular'}}>3</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.navigate("Calculation");
            navigation.closeDrawer();

          }}
          style={styles.links}
        >
          <Left>
            <Icon active name="calendar-alt" color="orange" size={20} />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Calculate</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.navigate("Compose");
            navigation.closeDrawer();

          }}
          style={styles.links}
        >
          <Left>
            <Icon name="envelope" color="white" size={20} />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Contact Us</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.closeDrawer();
            navigation.navigate("Contacts");
          }}
          style={styles.links}
        >
          <Left>
            <Icon name="tasks" color="white" size={20} />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Packages</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.navigate("Icons");
            navigation.closeDrawer();

          }}
          style={styles.links}
        >
          <Left>
            <Icon name="cog" color="white" size={20}  />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>Settings</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          icon
          onPress={() => {
            navigation.dispatch(resetAction);
            navigation.closeDrawer();

          }}
          style={styles.links}
        >
          <Left>
            <Icon name="power-off" color="red" size={20} />
          </Left>
          <Body>
            <Text style={{fontFamily:'Poppins-Regular'}}>LogOut</Text>
          </Body>
          <Right />
        </ListItem>
      </Content>
    );
  }
}

export default connect()(SideBar);
