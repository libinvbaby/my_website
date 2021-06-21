import React from 'react';
import './App.css';
import Header1 from './Header1';
import Contact from './Contact'; 
import Home  from './Home';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router,Switch, Route} from  'react-router-dom';
import Footer from './Footer';



function App() {
  return (
    <Router>
    <div className="app">
     
    <Header1 />
    <switch>
    <Route path="/about"  component={About} /> 
    <Route path="/home"  component={Home} /> 
    <Route path="/" exact component={Home} /> 
    <Route path="/shop" component={Shop} />
    <Route path="/contact" component={Contact} />
    </switch>
    <Footer />
    </div>
    
    </Router>
   
  );
}

export default App;
