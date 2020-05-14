import React, { Component } from "react";
import { ImageBackground,FlatList } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Spinner,
  List
} from "native-base";

import styles from "./styles";
import { itemsFetchData } from "../../actions";
import data from "./data.json";

const glow2 = require("../../../assets/glow2.png");

class Home extends Component {
  componentDidMount() {
    this.props.fetchData(data);
  }
  _renderItem = ({item}) =>(
                  <ListItem icon style={styles.listitem}>
                    <Left>
                      <Icon active name={item.icon} style={{ width: 30 }} />
                    </Left>
                    <Body>
                      <Text>
                        {item.listData}
                      </Text>
                    </Body>
                    <Right>
                      <Text style={{ fontWeight: "400", paddingTop: 18 }} note>
                        {item.time}
                      </Text>
                    </Right>
                </ListItem>
              );
  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    } else {
      const navigation = this.props.navigation;
      return (
        <Container>
          <ImageBackground  style={styles.containerImage}>
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
                <Title>Home</Title>
              </Body>
              <Right />
            </Header>

            <Content padder>
              <FlatList
                data={this.props.items}
                renderItem={this._renderItem}
              />
            </Content>
          </ImageBackground>
        </Container>
      );
    }
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}
const mapStateToProps = state => ({
  items: state.homeReducer.items,
  hasErrored: state.homeReducer.hasErrored,
  isLoading: state.homeReducer.isLoading
});
export default connect(mapStateToProps, bindAction)(Home);
