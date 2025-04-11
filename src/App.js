import logo from './logo.svg';
import './App.css';
import Great from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import HookCounter from './Components/HookCounter';
import NameHook from './Components/NameHook';
import ArrayHook from './Components/ArrayHook';
import CompA from './Components/CompA';
import React from 'react';
import ReducerHook from './Components/ReducerHook';

export const UserContext = React.createContext();



function App() {
  return (
    <div className="App">
      {/* <Great name ="raveen"/>
      <Great name ="priya"/>
      <Welcome name ="Sampath" />
      <Message />
      <Counter /> */}
      {/* <HookCounter />
      <NameHook /> */}
      <ArrayHook />
      <UserContext.Provider value={'sivabalan'}>
      <CompA />
      </UserContext.Provider>

      <ReducerHook />
    </div>
  );
}

export default App;
