import * as React from 'react';
import {
  Text, 
  View,
  } from 'react-native';
import Carousel ,{ Pagination } from 'react-native-snap-carousel';
const React2 = require("react-native");
const { Dimensions, Platform } = React2;
const deviceHeight = Dimensions.get("window").height;
import  Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Silver Plan",
              text: ["(01) Free trial calculation","2 Reinvestments periods","2 Packages ","2 Reinvestments types","2 Calculations only","2 Points","2 Weeks Validity",null,null],
              price:"2$ limo",
              bg:'white'
          },
          {
              title:"Diamond Plan",
              text: ["(01) Free trial calculation","All Reinvestments periods","All Packages ","All Reinvestments types","10 Caculations","10 Points","Best Available option","Weekly Calculations","2 Months Validity"],
              price:"10$ limo",
              bg:'white'
          },
          {
              title:"Gold Plan",
              text: ["(01) Free trial calculation","4 Reinvestments periods","5 Packages ","4 Reinvestments types","4 Caculations","4 Points","Weekly Calculations","1 Months Validity",null],
              price:"5$ limo",
              bg:'white'
          },
          {
            title:"Gold Plan",
            text: ["(01) Free trial calculation","4 Reinvestments periods","5 Packages ","4 Reinvestments types","4 Caculations","4 Points","Weekly Calculations","1 Months Validity",null],
            price:"5$ limo",
            bg:'white'
        },
        {
            title:"Gold Plan",
            text: ["(01) Free trial calculation","4 Reinvestments periods","5 Packages ","4 Reinvestments types","4 Caculations","4 Points","Weekly Calculations","1 Months Validity",null],
            price:"5$ limo",
            bg:'white'
        },
        {
            title:"Gold Plan",
            text: ["(01) Free trial calculation","4 Reinvestments periods","5 Packages ","4 Reinvestments types","4 Caculations","4 Points","Weekly Calculations","1 Months Validity",null],
            price:"5$ limo",
            bg:'green'
        }

        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:item.bg,
              borderRadius: 5,
              height: 400,
              padding:6,
              marginLeft: 30,
              marginTop:10,
              marginRight: 0, }}>
                  <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',backgroundColor:'orange',width:'90%',justifyContent:'center',padding:10,borderRadius:5,marginTop:20}}>
                        <Icon size={20} name="calendar-week" />
                        <Text style={{fontSize:20}} > Week {index+1}</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'flex-start',alignSelf:'flex-start',width:'88%',justifyContent:'flex-start',padding:10,borderRadius:5,marginTop:20}} >
                      <Text style={{padding:5,fontFamily:'Poppins-Regular'}}>Total Payout: $61</Text>
                      <Text style={{padding:5,fontFamily:'Poppins-Regular'}}>Bal W1: $61</Text>
                      <Text style={{padding:5,fontFamily:'Poppins-Regular'}}>Total Bal: $61</Text>
                      <Text style={{padding:5,fontFamily:'Poppins-Regular'}}>Invest: Can't Invest</Text>
                      <Text style={{padding:5,fontFamily:'Poppins-Regular'}}>Rem: $61</Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',backgroundColor:'green',width:'90%',justifyContent:'flex-start',padding:10,borderRadius:5,marginTop:20}}>
                        <Icon name="wallet" size={20} color="white" />
                        <Text style={{fontSize:20}} > W1 Bal: $61</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'flex-start',alignSelf:'flex-start',borderTopWidth:.2,borderTopColor:'black',width:'90%',justifyContent:'flex-start',borderRadius:5,marginTop:10,paddingLeft:10}}>
                      
                        <Text style={{fontSize:20,marginTop:5}} >Total Packages:</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon style={{marginRight:10}} name="folder" color="green" size={ 25 }/>
                            <Icon style={{marginRight:10}} name="folder" color="green" size={ 25 }/>
                            <Icon style={{marginRight:10}} name="folder" color="green" size={ 25 }/>
                            <Icon style={{marginRight:10}} name="folder" color="green" size={ 25 }/>
                        </View>
                  </View>

          </View>

        )
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}
              dotStyle={{
                  width: 15,
                  height: 15,
                  borderWidth:1,
                  borderColor:'white',
                  borderRadius: 10,
                  marginHorizontal: 1,
                  backgroundColor: '#06b0b6'
              }}
              inactiveDotStyle={{
                  backgroundColor:'white'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
          <View >
            <View >
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  
            </View>
            <View>
                {this.pagination}
            </View>
          </View>
        );
    }
}

