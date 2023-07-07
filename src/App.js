// import logo from './logo.svg';

import React,{ Component } from 'react';
import './App.css';

// // import fun comp
import Greet from './components/Greet';
import Hello from './components/Hello';

// // import class component
import Welcome from './components/Welcome';

import Message from './components/Message';
import Counter from './components/Counter';
import DestructFunComp from './components/DestructFunComp';
import DestructClassComp from './components/DestructClassComp';
import FuncionClick from './components/FuncionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponet from './components/ParentComponet';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import StyleSheet from './components/StyleSheet';
import InlineCss from './components/InlineCss';

import './moduleCss/appStyle.css';
import styles from './moduleCss/appStyle.module.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      {/* include fun comp */}
      {/* <h1>Hello World!</h1> */}

      {/* passing props from parent component to children component */}
      {/* <Greet name="Naruto" surname="Uzumaki">
        <p>This is children props</p>
      </Greet>

      <Greet name="Sasuke" surname="Uchiha">
      <button>Action</button>
      </Greet> */}

      {/* include class comp */}
      {/* <Welcome name="Hinata" surname="Hyuga"></Welcome>
      <Welcome name="Sakura" surname="Haruno"></Welcome> */}

      {/* with & without JSX */}
      {/* <Hello/> */}

      {/* <Message/> */}
      {/* <Counter addValue="1"/> */}

      {/* <DestructFunComp name="Minato" surname="Namikaze"/> */}
      {/* <DestructClassComp name="Kushina" surname={"Uzumaki"}/> */}

      {/* <FuncionClick/>
      <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponet/> */}

      {/* <ConditionalRendering/> */}

      {/* <ListRendering/> */}

      {/* <StyleSheet secondary={true} /> */}

      {/* <InlineCss/> */}

      {/* Css modules */}
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

    </div>
  );
  }
}

export default App;
