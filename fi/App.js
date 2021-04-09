import React from 'react';
import {Provider} from 'react-redux';
import LoginScreen from './Screens/LoginScreen';
import {store} from './redux/Redux';


const App = () => {
  return(
    <Provider store={store}>
        <LoginScreen />
    </Provider>
  )
}

export default App