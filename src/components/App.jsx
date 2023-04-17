import logo from '../assets/images/logo.svg';
import '../styles/App.scss';

import Nav from './Nav';
import Test from './Test';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
      </header>
    </div>
  );
}

export default App;
