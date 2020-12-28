import React from 'react'
import { rootStore } from './_redux';
import jwtDecode from 'jwt-decode'
import {Provider} from 'react-redux';
import { UserAuth, UserLogout } from './_redux/action/user';
import { setToken } from './service/setToken';
import { RouterContent } from './routes';
import { NavBar } from './Common/NavBar';

const store = rootStore()


if(localStorage.jwtToken){
  console.log(localStorage.jwtToken)
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
        <NavBar />
        <RouterContent />
    </Provider>
  );
}

export default App;
