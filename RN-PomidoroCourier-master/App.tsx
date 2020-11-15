import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import * as config from './src/config';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import * as Font from 'expo-font';
// @ts-ignore
import AppContainer from './src/navigation/AppNavigator';

interface MyProps {}

interface MyState {
  fontLoaded : boolean;
}

class App extends React.Component<MyProps, MyState> {

  constructor(props : any) {

    super(props);
    this.state = {
      fontLoaded: false,
    };

  }

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Black'        : require('./assets/fonts/Montserrat/Montserrat-Black.ttf'),
      'Montserrat-Bold'         : require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      'Montserrat-ExtraBold'    : require('./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraLight'   : require('./assets/fonts/Montserrat/Montserrat-ExtraLight.ttf'),
      'Montserrat-Italic'       : require('./assets/fonts/Montserrat/Montserrat-Italic.ttf'),
      'Montserrat-Light'        : require('./assets/fonts/Montserrat/Montserrat-Light.ttf'),
      'Montserrat-Medium'       : require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'),
      'Montserrat-MediumItalic' : require('./assets/fonts/Montserrat/Montserrat-MediumItalic.ttf'),
      'Montserrat-Regular'      : require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold'     : require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
      'Montserrat-Thin'         : require('./assets/fonts/Montserrat/Montserrat-Thin.ttf'),
    });

    this.setState({ fontLoaded: true });

  }

  loader() {

    return (

      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>

    );

  }

  render() {

    if (!this.state.fontLoaded) {
      return this.loader();
    }

    return (
      <Provider store={config.store}>
        <PersistGate loading={ this.loader() } persistor={ config.persistor }>
          <ApplicationProvider mapping={ mapping } theme={ lightTheme }>
            <AppContainer />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    );

  }
}

export default App
