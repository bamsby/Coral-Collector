import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Font } from 'expo';

import reducers from './reducers';
import Router from './App/Router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDjTe5VYlsH2YVfgcFO2Q7zJVNK-3VFYcI',
      authDomain: 'coral-d0362.firebaseapp.com',
      databaseURL: 'https://coral-d0362.firebaseio.com',
      projectId: 'coral-d0362',
      storageBucket: 'coral-d0362.appspot.com',
      messagingSenderId: '878150861542'
    };
    
    firebase.initializeApp(config);
    
    await Font.loadAsync({
      'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
      'oswald-bold': require('./assets/fonts/Oswald-Bold.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'gotham-round': require('./assets/fonts/GothamRoundedLight.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    console.log(this.state.fontLoaded);
    return (
      this.state.fontLoaded
        ?
      <Provider store={store}>
        <Router />
      </Provider>
        :
        null
    );
  }
}
