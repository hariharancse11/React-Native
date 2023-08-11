import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {sortCategoryData} from '../constants/index'
import {theme} from '../theme/index';
import {useState} from 'react';

const SortCategories = () => {
  const [activeSort,setActiveSort] = useState('Popular');
  return (
    <View style = {{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginHorizontal:wp(4),borderRadius:wp(5), backgroundColor:'#e6dfdf',padding:wp(2)}}>
      {
        sortCategoryData.map((sort,index)=>{
          let isActive = sort==activeSort;
          return(
            <TouchableOpacity onPress={()=>setActiveSort(sort)} key={index} style={[styles.sorts,isActive?styles.bg:null]}>
            <Text style={{fontWeight:'bold',  color: isActive?theme.text:'rgba(0,0,0,0.5)'}}>{sort}</Text>
          </TouchableOpacity>
          );
          
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sorts:
  {padding:wp(3), paddingHorizontal:wp(4), borderRadius:10},
  bg:{
  backgroundColor:'white'
  }
});

export default SortCategories;
