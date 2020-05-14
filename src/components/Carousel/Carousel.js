import * as React from 'react';
import {
  Text, 
  View,
  } from 'react-native';
import Carousel ,{ Pagination } from 'react-native-snap-carousel';
const React2 = require("react-native");
const { Dimensions, Platform } = React2;
const deviceHeight = Dimensions.get("window").height;
import  Icon from 'react-native-vector-icons/FontAwesome';

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
              bg:'#012840'
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
              bg:'#012840'
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
            <View style={{
                padding: 10,
                paddingBottom:10,
                paddingTop:20,
                flexDirection:'row',
                fontSize: 20,
                borderBottomWidth:.4,
                borderBottomColor:'grey'
                }}><Text style={{fontSize:15,fontFamily:'Poppins-Bold',flex:1 ,color:item.bg=='white'?'black':'white'}}>{item.title}</Text>
                <Text style={{color:item.bg=='white'?'black':'white',fontSize:20,fontFamily:'Poppins-Bold'}} ><Icon name="star" color="orange" size={30}/> {item.price} </Text>
            </View>
            <View style={{padding:20}}>
                    {item.text.map(((element,index) => element==null? <Text id={index} style={{padding:1,color:item.bg=='white'?'black':'white',fontSize:15,fontFamily:'Poppins-Regular'}}> </Text> :<Text style={{padding:1,color:item.bg=='white'?'black':'white',fontSize:deviceHeight<900?12:15,fontFamily:'Poppins-Regular'}}><Icon name="check-circle" size={deviceHeight<900? 20: 25} color="#10ae06"  />    {element} </Text>))}
            </View>
            <View style={{
                alignContent:'center',
                padding: 20,
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                
                borderTopWidth:.4,
                borderTopColor:'grey'
                }}><Text style={{fontSize:deviceHeight<900?16:20,fontFamily:'Poppins-Bold',flex:1 ,color:item.bg=='white'?'black':'white'}}>Choose Plan   <Icon name="chevron-right" color="orange" size={deviceHeight<900?20:30}/><Icon name="chevron-right" color="orange" size={deviceHeight<900?20:30}/></Text>
               
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

