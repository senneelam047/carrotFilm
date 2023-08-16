import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ALL_FILMS } from '../components/queries';
import FilmItem from '../components/FilmItem';

const FilmListScreen = () => {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);

    if(loading)return <View style={styles.container}><Text >..Loading</Text></View>

    if(error)return<View style={styles.container}><Text >Error message: {error.message}</Text></View>

    const films = data.allFilms.films;

    const scrollx = new Animated.Value(0); // Animation value for left-to-right

    return(
        <View style={styles.mainContainer}>
            <FlatList
            data={films}            
            keyExtractor={(item)=> item.id}
            style={styles.container}
            horizontal
            pagingEnabled
            renderItem={({item, index})=>(
                <FilmItem film={item} index={index} scrollX={scrollx} />
            )}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollx} }}],
                {useNativeDriver: false}
            )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding:16
    },
    container:{
        flex: 1, 
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    loading:{
        fontSize:20,
        color: '#000'
    },
    error:{
        fontSize:20,
        color: 'red'
    }
    
})

export default FilmListScreen;