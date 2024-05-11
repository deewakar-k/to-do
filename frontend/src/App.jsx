import React, { useState } from 'react';
import Foreground from './components/Foreground';
import './App.css';
import Background from './components/Background';

function App() {

  return (
    <div className='relative w-full h-screen'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App;