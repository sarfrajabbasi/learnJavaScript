import './App.css';
import EventBind from './component/eventHanderBind';
import ClickMeClass  from './component/eventhandling';
// import Welcome from './component/classComponent';
// import Greetings from './component/funcComponent';
// import {Hello} from './component/JSXme'
import MyName,{Hola} from './component/prop';
import Counter from './component/setState';
import Message from './component/state';
function App() {
  return (
    <div className="App">
     {/* <h1 >Hello world</h1> */}
     {/* <HelloWrold></HelloWrold> */}
     {/* <Greetings name= "sarfraj"></Greetings> */}
     {/* <Welcome></Welcome> */}
     {/* <Hello></Hello> */}
     {/* <MyName name='sarfraj'>
      <p>holla</p>
     </MyName>
     <MyName name='jolly'>
      <button>Hello</button>
     </MyName>
     <MyName name='ruby'>
      <p>time is pass like water</p>
     </MyName>
     <Hola name="goldy"></Hola>
     <Message name ="sarfraj" ></Message> */}
     <Counter></Counter>
     {/* <ClickMe></ClickMe> */}
     <ClickMeClass></ClickMeClass>
     <EventBind></EventBind>
    </div>
  );
}

export default App;
