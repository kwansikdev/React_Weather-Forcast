import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/Home';
import View from './pages/View';
import Add from './pages/Add';
import NotFound from './pages/NotFound';

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%);
  }`;

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/weathers/view" component={View} />
          <Route exact path="/weathers/add" component={Add} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
