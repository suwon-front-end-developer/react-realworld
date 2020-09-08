import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};

export default App;
