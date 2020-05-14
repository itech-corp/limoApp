import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Left,
  Right,
  Body
} from "native-base";
import AllContacts from "./allContacts";
import Favourites from "./favourites";
import Recent from "./recent";
import styles from "./styles";

const glow2 = require("../../../assets/glow2.png");

class Contacts extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
          <Header hasTabs style={{ elevation: 0 }}>
            <Left>
              <Button
                transparent
                onPress={() => navigation.openDrawer()}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Contacts</Title>
            </Body>
            <Right />
          </Header>

          <Tabs>
            <Tab heading="All" activeTextStyle={{color:'#ffff'}}>
              <AllContacts />
            </Tab>
            <Tab heading="Favourite" activeTextStyle={{color:'#ffff'}}>
              <Favourites />
            </Tab>
            <Tab heading="Recent" activeTextStyle={{color:'#ffff'}}>
              <Recent />
            </Tab>
          </Tabs>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect()(Contacts);
