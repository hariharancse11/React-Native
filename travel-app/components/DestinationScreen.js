import React from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView ,TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';   
import {StatusBar} from 'expo-status-bar'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {theme} from '../theme/index'
 
const DestinationScreen = (props) => {
  const navigation = useNavigation();
  const [isFavourite,toggleIsFavourite] = useState(false);
  const heart = <Icon name="heart" size={19} color={ isFavourite?"red":"white"}/>;
  const goback = <Icon name="chevron-left" size={19} color='white'/>;
  const clock = <Icon name="hourglass" size={19} color='skyblue'/>;
  const sun = <Icon name="cloud" size={19} color='#F3E20C'/>;
  const distance = <Icon name="location-arrow" size={19} color='red'/>;
  const  item = props.route.params;
  //console.log(item.image);
  return (
    <View style={styles.container}>
    {/* Destination Image */}
      <Image source={item.image} style={{height:hp(55), width:wp(100)}}/>
      <StatusBar style={'light'} />

      {/* back button */}
      <SafeAreaView style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',position:'absolute',marginVertical:wp(10)}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{top:wp(6),left:wp(6),padding:wp(4),backgroundColor:'rgba(255,255,255,0.4)',borderRadius:wp(12)}}>
          <Text>{goback}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>toggleIsFavourite(!isFavourite)} style={{top:wp(6),right:wp(6),padding:wp(4),backgroundColor:'rgba(255,255,255,0.4)',borderRadius:wp(12)}}>
          <Text>{heart}</Text>
        </TouchableOpacity>

      </SafeAreaView>
    

    {/* Title, Description & Booking Button */}

    <View style={styles.description}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'flex-start',marginTop:wp(3.5)}}>
          <Text style={{fontSize:wp(7),fontWeight:'bold',flex:1}}>
            {item?.title}
          </Text>
          <Text style={{fontSize:wp(7),fontWeight:'semibold',color:theme.text}}>
           $ {item?.price}
          </Text>
        </View>

        <Text style={{fontSize:wp(4.7),marginBottom:2,marginTop:wp(3)}}>{item?.longDescription}</Text>

        <View style={{flexDirection:'row',marginHorizontal:wp(1), justifyContent:'space-between',marginTop:wp(5)}}>
          <View style={{flexDirection:'row',alignItems:'flex-start'}}>
            <Text>{clock}</Text>
            <View style={{marginLeft:wp(3)}}>
            <Text style={{fontWeight:'bold',fontSize:wp(5)}}>{item.duration}</Text>
            <Text style={{fontSize:wp(3.4)}}>Duration</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',alignItems:'flex-start'}}>
            <Text>{distance}</Text>
            <View style={{marginLeft:wp(3)}}>
            <Text style={{fontWeight:'bold',fontSize:wp(5)}}>{item.distance}</Text>
            <Text style={{fontSize:wp(3.4)}}>Distance</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',alignItems:'flex-start'}}>
            <Text>{sun}</Text>
            <View style={{marginLeft:wp(3)}}>
            <Text style={{fontWeight:'bold',fontSize:wp(5)}}>{item.weather}</Text>
            <Text style={{fontSize:wp(3.4)}}>Sunny</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={{left:wp(15),marginhorizontal:'50%',marginBottom:wp(4), justifyContent:'center',alignItems:'center', borderRadius:wp(6), backgroundColor:theme.bg(0.7),height:wp(15), width:wp(50)}}> 
        <Text style={{color:'white',fontSize:wp(5.5),fontWeight:'bold'}}>Book Now</Text>
      </TouchableOpacity>
    </View>
    
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  description: {
    paddingHorizontal:wp(9),
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingTop:wp(6),
    flex:1,
    borderTopLeftRadius:wp(15),
    borderTopRightRadius:wp(15),
    marginTop:wp(-12)
  },
});

export default DestinationScreen;
