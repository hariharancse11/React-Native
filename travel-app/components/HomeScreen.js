import React from 'react';
import { View, Text, StyleSheet,SafeAreaView,ScrollView,Image,TouchableOpacity,TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon } from '@rneui/themed';
import Categories from '../parts/Categories'
import SortCategories from '../parts/SortCategories'
import Destinations from '../parts/Destinations'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Avatar */}
      <View style={styles.avatar}>
        <Text style={{fontWeight:'bold',fontSize:wp(7)}}> Let's Discover</Text>
        <TouchableOpacity>
        <Image source={require('../assets/images/avatar.png')} style={{height:wp(12), width:wp(12)}} />
        </TouchableOpacity>
      </View>


      {/* Search Bar */}
      <View style={{marginHorizontal:wp(5), marginBottom:wp(4),marginTop:wp(4)}}>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'white', borderRadius:wp(4), padding:wp(4), paddingHorizontal:wp(6)}}>
        <Icon
        name='search' color='gray' />
        <TextInput 
          placeholder='Search Destination'
          placeholderTextColor={'gray'}
          style={{flex:1,fontWeight:'normal', marginBottom:wp(1), paddingHorizontal:wp(1)}}
          />
        
        </View>
      </View>

      {/* Categories */}
      <View style={{marginBottom:wp(4),marginTop:wp(4)}}>
        <Categories />
      </View>

       {/*  Sort Categories */}
      <View style={{marginBottom:wp(4),marginTop:wp(4)}}>
        <SortCategories />
      </View>

      {/*  Destinations */}
      <View>
        <Destinations />
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:wp(2),
    marginVertical:wp(7),
    paddingHorizontal:wp(3)
  },
  avatar: {
    marginHorizontal:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
  },
});

export default HomeScreen;
