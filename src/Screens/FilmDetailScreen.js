import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { GestureHandlerRootView,PinchGestureHandler, State } from 'react-native-gesture-handler';

const FilmDetailScreen = ({route}) =>{
    const navigation = useNavigation();
    const [scale, setScale] = useState(new Animated.Value(1));


    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('FilmList')
        },500)
    },[])

    const onPinchEvent = Animated.event(
        [{nativeEvent: {scale}}],
        {useNativeDriver: false}
    );

    const onPinchStateChange = event => {
        if(event.nativeEvent.oldState === State.ACTIVE){
            Animated.spring(scale, {
                toValue: 2,
                useNativeDriver: false,
            }).start();
        }
    }

    const film = route.params;

    return(
        <View style={styles.container}>
            <GestureHandlerRootView>
                <PinchGestureHandler
                    onGestureEvent={onPinchEvent}
                    onHandlerStateChange={onPinchStateChange}
                    >
                        <Animated.View style={{transform: [{scale}]}}>
                            <Image
                            source={require('../assets/images/image1.jpg')}
                            style={styles.image} //Allow Zooming
                            />
                        </Animated.View>
                </PinchGestureHandler>
            </GestureHandlerRootView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 4,
        borderColor: '#000',
        borderWidth:10,
        resizeMode: 'contain',
    },
    
})

export default FilmDetailScreen