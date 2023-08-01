// import logo from './logo.svg';

import React, { Component } from 'react';
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
import Form from './components/Form';

import './moduleCss/appStyle.css';
import styles from './moduleCss/appStyle.module.css';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/Fragments/FragmentDemo';
import Table from './components/Fragments/Table';
import ParentComp from './components/PureMemoComp/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/Refs/FocusInput';
import ForwardRefParentInput from './components/Refs/ForwardRefParentInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Count from './components/Count';
import ClickCounter from './components/HigherOrderComponents/ClickCounter';
import HoverCounter from './components/HigherOrderComponents/HoverCounter';
import ClickCounterRP from './components/ReactProps/ClickCounterRP';
import HoverCounterRP from './components/ReactProps/HoverCounterRP';
import User from './components/ReactProps/User';
import CounterRP from './components/ReactProps/CounterRP';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext';
import PostList from './components/ReactHTTP/PostList';
import PostForm from './components/ReactHTTP/PostForm';

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

        {/* <Counter addValue="1" /> */}
        {/* <Count /> */}

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
        {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

        {/* <Form/> */}

        {/* <LifeCycleA /> */}

        {/* <FragmentDemo /> */}
        {/* <Table /> */}

        {/* <ParentComp /> */}

        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <ForwardRefParentInput /> */}

        {/* <PortalDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroname={'Batman'} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname={'Superman'} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroname={'Joker'} />
        </ErrorBoundary> */}

        {/* <ClickCounter name="Mr.Click" /> */}
        {/* <HoverCounter name="Mr.Hover" /> */}

        {/* <User render={(isLoggedIn) => isLoggedIn ? "PervySage" : "Guest"} />
        <CounterRP
          render={(count, incrementCount) => (
            <ClickCounterRP count={count} incrementCount={incrementCount} />
          )}
        />
        <CounterRP
          render={(count, incrementCount) => (
            <HoverCounterRP count={count} incrementCount={incrementCount} />
          )}
        /> */}

        {/* step 2 */}
        {/* <UserProvider value="Vishwas">
          <ComponentC />
        </UserProvider> */}

        {/* <PostList />
        <PostForm /> */}










      </div>
    );
  }
}

export default App;
