import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Card,
  CardItem,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import styles from "./styles";

const glow2 = require("../../../assets/glow2.png");
const sanket = require("../../../assets/contacts/sanket.png");

class Mail extends Component {
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
              <Title>Mail</Title>
            </Body>
            <Right />
          </Header>

          <Content padder style={{ marginBottom: 30, paddingTop: 0 }}>
            <View style={styles.cardView}>
              <Card style={styles.card}>
                <CardItem header style={styles.cardHeader}>
                  <Left>
                    <Thumbnail small source={sanket} />
                    <Body>
                      <Text style={{ fontWeight: "bold" }}>Kumar Sanket</Text>
                      <Text note>StrapMobile</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text note style={styles.date}>
                      18 May, 5:15 PM
                    </Text>
                  </Right>
                </CardItem>

                <CardItem style={styles.cardItem}>
                  <Text style={{ marginBottom: 15 }}>
                    Before Monday night’s fixture against Newcastle, Leicester
                    are top of the Premier League. Before Monday night’s fixture
                    against Newcastle, Leicester are top of the Premier League.
                    Before Monday night’s fixture against Newcastle, Leicester
                    are top of the Premier League. Before Monday night’s fixture
                    against Newcastle, Leicester are top of the Premier League.
                  </Text>
                  <Text style={{ alignSelf: "flex-start" }}>Thanks,</Text>
                  <Text style={{ alignSelf: "flex-start" }}>Kumar Sanket</Text>
                  <Text style={{ alignSelf: "flex-start" }}>
                    GeekyAnts India Pvt. Ltd.
                  </Text>
                </CardItem>
              </Card>
            </View>
            <Text style={{ marginLeft: 10, paddingTop: 10 }}>Attachments</Text>
            <ListItem style={styles.listItem}>
              <Icon active name="images" style={{ fontSize: 27 }} />
              <Text style={{ marginLeft: 7 }}>invitation.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Icon active name="images" style={{ fontSize: 27 }} />
              <Text style={{ marginLeft: 7 }}>profile.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Icon active name="images" style={{ fontSize: 27 }} />
              <Text style={{ marginLeft: 7 }}>mail.jpg</Text>
            </ListItem>
            <ListItem style={styles.listItem}>
              <Icon active name="images" style={{ fontSize: 27 }} />
              <Text style={{ marginLeft: 7 }}>inbox.jpg</Text>
            </ListItem>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect()(Mail);
