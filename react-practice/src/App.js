import './App.css';
import UserGreeting from './component/ConditionalRendering';
import ParentComponent from './component/MethodsAsProps';
import EventBind from './component/eventHanderBind';
import ClickMeClass  from './component/eventhandling';
import NameList from './component/listRandering';
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
     {/* <Counter></Counter> */}
     {/* <ClickMe></ClickMe> */}
     {/* <ClickMeClass></ClickMeClass> */}
     {/* <EventBind></EventBind> */}
     {/* <ParentComponent></ParentComponent> */}
     <UserGreeting></UserGreeting>
     <NameList></NameList>
    </div>
  );
}

export default App;
