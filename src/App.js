// import logo from './logo.svg';
import './App.css';
import Logo from './imgs/Logo.png'
import Filter from './Components/Filter';

function App() {
  return (
    <div className="App">
      <div className='logo' >
        <img src={Logo} alt='logo' />
      </div>
      <div className='container' >
        <Filter/>
      </div>
    </div>
  );
}

export default App;
