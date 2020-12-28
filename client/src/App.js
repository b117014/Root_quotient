import React from 'react'
import { rootStore } from './_redux';
import jwtDecode from 'jwt-decode'
import {Provider} from 'react-redux';

const store = rootStore()


if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
       store.dispatch(UserAuth(jwtDecode(localStorage.jwtToken)))

  }catch(err){
     store.dispatch(UserLogout())
  }
}

function App() {
  return (
    <Provider store={store}>

    </Provider>
  );
}

export default App;
