import './App.css';
import Welcome from './component/classComponent';
import Greetings from './component/funcComponent';
function App() {
  return (
    <div className="App">
     {/* <h1 >Hello world</h1> */}
     {/* <HelloWrold></HelloWrold> */}
     <Greetings name= "sarfraj"></Greetings>
     <Welcome></Welcome>
    </div>
  );
}

export default App;
