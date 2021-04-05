import './App.css';
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <Welcome message="react" />
      <Welcome message="js" />
    </div>
  );
}

export default App;
