import './App.css';
import Welcome from './component/classComponent';
import Greetings from './component/funcComponent';
import {Hello} from './component/JSXme'
import MyName,{Hola} from './component/prop';
function App() {
  return (
    <div className="App">
     {/* <h1 >Hello world</h1> */}
     {/* <HelloWrold></HelloWrold> */}
     {/* <Greetings name= "sarfraj"></Greetings> */}
     {/* <Welcome></Welcome> */}
     {/* <Hello></Hello> */}
     <MyName name='sarfraj'>
      <p>holla</p>
     </MyName>
     <MyName name='jolly'>
      <button>Hello</button>
     </MyName>
     <MyName name='ruby'>
     </MyName>
     <Hola name="goldy"></Hola>
    </div>
  );
}

export default App;
