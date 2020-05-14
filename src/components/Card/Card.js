import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,View,Right,Left, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class HeaderCard extends Component {
  render() {
    return (
      <View>
        <Header />
        <Content>
          <Card>
            <CardItem header style={{borderBottomWidth:.6,borderBottomColor:'orange'}}>
              <Left>
                <Text style={{color:"black"}}>Diamond Plan</Text>
              </Left>
              <Right>
                <Text  style={{color:"black"}}>Code: CGERT53564</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{color:'black',fontSize:13,fontFamily:'Poppins-Regular'}}><Icon size={14} name="box" color='orange' /> Your selected package: $100.000</Text>
                        <Text style={{color:'black',fontSize:13,fontFamily:'Poppins-Regular'}}><Icon size={14} name="calendar-week" color='orange' /> Duration Selected: 3 Years</Text>
                        <Text style={{color:'black',fontSize:13,fontFamily:'Poppins-Regular'}}><Icon size={14} name="list" color='orange' /> Reinvestment Type: Every 3 Weeks</Text>
                    </View>
                    <Right style={{alignItems:'flex-end',justifyContent:'flex-start',paddingTop:0,alignSelf:'flex-start'}}>
                        <Button small dark><Text style={{color:"white"}}>Download   <Icon color="orange" name="download" /> </Text></Button>
                    </Right>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </View>
    );
  }
}