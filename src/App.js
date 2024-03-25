// import logo from './logo.svg';
import './Css/App.css';
import Logo from './imgs/Logo.png'
import Filter from './Components/Filter';
import Page from './Components/Page'

function App() {
  return (
    <div className="App">
      <div className='logo' >
        <img src={Logo} alt='logo' />
      </div>
      <div className='container' >
        <Filter/>
        <Page/>
      </div>
    </div>
  );
}

export default App;
