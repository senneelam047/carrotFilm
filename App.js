import React, {useEffect} from 'react';  
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/components/Navigation';

const App =()=>{

    useEffect(() => {
        setTimeout(() => {
          SplashScreen.hide();
        }, 1000);
      }, []);

    return (
            // <SafeAreaView>
                <Navigation/>
            // </SafeAreaView>
    )
}

export default App;