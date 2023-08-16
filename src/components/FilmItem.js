import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FilmItem = ({film, index, scrollX})=>{
    const navigation = useNavigation();

    //Calculate animation values based on the index and scrollx
    return (
        <Animated.View
        style={style=styles.FlatListContainer}
        >
            <TouchableOpacity
            onPress={() => navigation.navigate('FilmDetail',{index:index})}
            >
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/images/image1.jpg')}
                style={styles.image} //Allow Zooming
                />
              <Text style={styles.title}>{film.title}</Text>
              <Text  style={styles.date}>Release Date: {film.releaseDate}</Text>
              <Text  style={styles.episode}>Episode: {film.episodeID}</Text>
              <Text  style={styles.director}>Director: {film.director}</Text>
            </View>

            </TouchableOpacity>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    FlatListContainer:{
        padding:5
    },
    itemContainer:{
        // flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 10
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    date: {
        marginTop: 4,
        color: '#000'
      },
      episode:{
        fontSize: 18,
        color: '#000',
        fontWeight: 'normal'
      },
      director:{
        fontSize: 18,
        color: '#000',
        fontWeight: 'normal'
      }
})

export default FilmItem;