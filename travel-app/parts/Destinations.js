import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {destinationData} from '../constants/index'
import {theme} from '../theme/index';
import {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Destinations = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
          destinationData.map((dest,index)=>{
            return(
              <DestinationCard navigation={navigation} key={index} item={dest} />
            )
          })
      }  
   </View>
  );
};

const DestinationCard = ({item,navigation}) =>{
  const [isFavourite,setIsFavourite] = useState(false);
  const myIcon = <Icon name="heart" size={15} color={ isFavourite?"red":"white"}/>;
  return(
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Destination',{...item})}
    style={styles.cards}>
      <Image source={item.image} style={styles.bg} />
      <TouchableOpacity style={{position:'absolute',top:wp(3),right:wp(3),borderRadius:wp(5),backgroundColor:'rgba(255,255,255,0.4)',padding:wp(2.5)}} onPress={()=>setIsFavourite(!isFavourite)}>
      <Text>{myIcon}</Text>
      </TouchableOpacity>
      <Text style={{color:'white',fontWeight:'bold',fontSize:wp(5)}}>{item.title}</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:wp(2.2)}}>{item.shortDescription}</Text>
      <LinearGradient colors={['transparent','rgba(0,0,0,0.8)']} 
        style={{width:wp(44),height:hp(15),position:'absolute',bottom:0,borderRadius:wp(5)}}
        start={{x:0.5,y:0}}
        end={{x:0.5,y:1}}
        
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal:wp(2),
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  cards: {
  height:wp(65),
  width:wp(44),
  justifyContent:'flex-end',
  position:'relative',
  padding:wp(4),
  paddingVertical:wp(6),
  marginBottom:wp(3)
  },
bg:{
  height:wp(65),
  width:wp(44),
  position:'absolute',
  borderRadius:wp(5)
  },
});

export default Destinations;
