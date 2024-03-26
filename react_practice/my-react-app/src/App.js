import './App.css';
import Welcome from './component/classComponent';
import Greetings from './component/funcComponent';
import {Hello} from './component/JSXme'
function App() {
  return (
    <div className="App">
     {/* <h1 >Hello world</h1> */}
     {/* <HelloWrold></HelloWrold> */}
     <Greetings name= "sarfraj"></Greetings>
     <Welcome></Welcome>
     <Hello></Hello>
    </div>
  );
}

export default App;
