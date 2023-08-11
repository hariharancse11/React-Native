import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native'


const WelcomeScreen = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/welcome.png')}
        style={styles.bgImg}
        />


      <View>
        <LinearGradient colors={['transparent','rgba(3,105,161,0.8)']} 
        style={{width:wp(100),height:hp(60),position:'absolute',bottom:0}}
        start={{x:0.5,y:0}}
        end={{x:0.5,y:1}}
        
        />
        <View>
            <Text style={{padding:5, paddingBottom:10,fontWeight:'bold',color:'white',fontSize:wp(14),marginHorizontal:'4.5%'}}>Travelling made easy</Text>
            <Text style={{padding:5, paddingBottom:10,fontWeight:'normal',color:'white',fontSize:wp(4),marginHorizontal:'4.5%'}}>Experience the world's best adventure around the worlds with us</Text>
        </View>
          <TouchableOpacity style={{backgroundColor:'orange',paddingHorizontal:wp(10),padding:wp(5), borderRadius:wp(10),marginHorizontal:wp(25),marginBottom:20,}} onPress={()=>navigation.navigate('Home')}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:wp(5),textAlign:'center'}}>Let's go!</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgImg:{
    height:'100%',
    width:'100%',
    position:'absolute',
  }
});

export default WelcomeScreen;
