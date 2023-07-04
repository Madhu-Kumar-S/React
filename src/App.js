// import logo from './logo.svg';

import React,{ Component } from 'react';
import './App.css';

// // import fun comp
// import Greet from './components/Greet';
// import Hello from './components/Hello';

// // import class component
// import Welcome from './components/Welcome';

// import Message from './components/Message';
// import Counter from './components/Counter';
// import DestructFunComp from './components/DestructFunComp';
// import DestructClassComp from './components/DestructClassComp';
import FuncionClick from './components/FuncionClick';

class App extends Component {
  render() {
  return (
    <div className="App">
       {/* include fun comp */}
       {/* <h1>Hello World!</h1> */}

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

      <FuncionClick/>
    </div>
  );
  }
}

export default App;
