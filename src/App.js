import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <title>Portfolio</title>
        <header>
          <div className="navBar">
            <ul className="navList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </header>

        <div className="display">
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;
