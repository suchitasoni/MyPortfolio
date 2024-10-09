import React from 'react'
import Header from './components/Header';
import './App.css';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
      <div style={{backgroundColor: '#faf2f0', backgroundAttachment: 'fixed'}}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
