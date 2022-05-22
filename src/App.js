import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName = fullname => alert(fullname);
  return (
    <div className="App">
      <Profile fullname="mohamed" bio="born in 1978" proffesion="astraunaut" handleName={handleName}/>
    </div>
  );
}

export default App;
