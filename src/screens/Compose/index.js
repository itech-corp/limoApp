import React, {Component} from "react";
import {ImageBackground} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Right,
  Left,
  Body,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");
const glow2 = require("../../../assets/glow2.png");

class Compose extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={glow2} style={styles.containerImage}>
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
              <Title>Compose</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <Card style={styles.box}>
              <CardItem
                style={{borderBottomWidth: 1, borderBottomColor: "#ddd"}}
              >
                <Text style={{color: commonColor.lightTextColor}}>From</Text>
                <Text
                  style={{
                    color: commonColor.inverseTextColor,
                    paddingLeft: 10
                  }}
                >
                  sanket@gmail.com
                </Text>
              </CardItem>

              <CardItem
                style={{borderBottomWidth: 1, borderBottomColor: "#ddd"}}
              >
                <Text style={{color: commonColor.lightTextColor}}>To</Text>
                <Text
                  style={{
                    color: commonColor.inverseTextColor,
                    paddingLeft: 10
                  }}
                >
                  pratik@gmail.com
                </Text>
              </CardItem>

              <CardItem
                style={{borderBottomWidth: 1, borderBottomColor: "#ddd"}}
              >
                <Text style={{color: commonColor.lightTextColor}}>Subject</Text>
                <Text
                  style={{
                    color: commonColor.inverseTextColor,
                    paddingLeft: 10
                  }}
                >
                  Enquiry about StrapMobile
                </Text>
              </CardItem>

              <CardItem>
                <Text style={{color: commonColor.inverseTextColor}}>
                  I watched Leicester City lose in the 1969 FA Cup final with my
                  dad when I was eight and cried all the way home. I have seen
                  them get promoted and relegated. I played eight years for
                  them. I even got a group of like‑minded fans and friends to
                  stump up a few quid to salvage the club when they went into
                  liquidation.
                </Text>
              </CardItem>

              <CardItem header style={styles.box}>
                <Button rounded style={{paddingHorizontal: 15}}>
                  <Text style={{color: commonColor.textColor}}>Send</Text>
                </Button>
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Compose;
