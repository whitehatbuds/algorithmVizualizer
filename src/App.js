import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Footer } from './components';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Signup from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/algorithmVizualizer' exact component={() => <Home/>}/>
        <Route path='/services' exact component={() => <Services />}/>
        <Route path='/products' exact component={() => <Products />}/>
        <Route path='/sign-up' exact component={() => <Signup />}/>
        <Route exact path="/">
          <Redirect to="/algorithmVizualizer" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;