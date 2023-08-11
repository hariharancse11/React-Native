import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {categoriesData} from '../constants/index'
import {theme} from '../theme/index'

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize:wp(5), fontWeight:'bold'}}>Categories</Text>
      <TouchableOpacity>
      <Text style={{fontSize:wp(5), fontWeight:'bold', color: theme.text}}>See all</Text>
      </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal:15}}
      showsHorizontalScrollIndicator={false}
      >
      {
        categoriesData.map((cat,index)=>{
          return(
            <TouchableOpacity key={index}>
              <Image source={cat.image} style={{height:wp(20), width:wp(20), borderRadius:20,justifyContent:'space-between',margin:wp(1)}} />
              <Text style={{textAlign:'center'}}>{cat.title}</Text>
            </TouchableOpacity>
          );
        })
      }

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
});

export default Categories;
