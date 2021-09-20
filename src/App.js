
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Log In/Login';
import Signup from './components/Sign Up/Signup';
function App() {
  var links = [
    { endpoint: '#', name:'Menu' },
    { endpoint: '/contact', name:'Contact' },
    { endpoint: '/about', name:'About' },
    { endpoint: '/signup', name:'Sign Up' },
    { endpoint: '/login', name:'Log In' }
  ];
  const listItems = links.map((link,i) =>
        <a key={i} href="{link.endpoint}">{link.name}</a> 
    );
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 logo-container">
            <h1>Logo</h1>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="navigatio-container">
              {listItems}
            </div>
            <Contact></Contact>
            <About></About>
            <Signup></Signup>
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
