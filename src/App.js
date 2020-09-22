import * as React from 'react';
import Navigation from './navigation/navigation';
import {Provider} from 'react-redux';
import {store} from '../src/store/reducers';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
