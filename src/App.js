import React from 'react';
import MyProvider from './myContext/MyProvider';
import MainPage from './page/MainPage';

function App() {
  return (
    <MyProvider>
      <MainPage />
    </MyProvider>
  );
}

export default App;
