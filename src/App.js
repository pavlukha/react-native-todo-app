import * as React from 'react';
import Navigation from './navigation/navigation';
import {Provider} from 'react-redux';
import {store} from '../src/store/reducers';

console.disableYellowBox = true;

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
