import React, { Component } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Greet from "./components/Greet";
// import Wellcome from "./components/Wellcome";
// import Message from "./components/Message";
// import Hello from "./components/Hello";
// import FunctionOnClick from "./components/FunctionClick";
// import ClickHandle from "./components/ClassClick";
// import ParentComponent from "./components/ParentComponent";
// import EventClick from "./components/EventHandler";
// import UserGreeting from "./components/UserGreeting";
// import ClassCounter from "./components/ClassCounter";
// import HookCount from "./components/HookCounter";
// import Destruct from "./components/desctructure";
// import Form from "./components/Form";
// import UserForm from "./components/Form2";
// import LifeCycleA from "./components/LifeCycleA";
// import FragmentDemo from "./components/Fragment";
// import Table from "./components/Table";
// import ParentComp from "./components/ParentComp";
// import RefDemo from "./components/RefsDemo";
// import FocusInput from "./components/FoucsInput";
// import FRParentInput from "./components/FRParentInput";
// import PortalDemo from "./components/PortalDemo";
// import Hero from "./components/Hero";
// import ErrorBoundry from "./components/ErrorBoundry";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

// function App() {
//   return (
//     <div className="App">
//       <PureComp />
//       {/* <Table /> */}
//       {/* <FragmentDemo /> */}
//       {/* <LifeCycleA /> */}
//       {/* <Form /> */}
//       {/* <UserForm /> */}
//       {/* <Destruct name="Kamal" heroName="IronMan" /> */}
//       {/* <HookCount /> */}
//       {/* <ClassCounter /> */}
//       {/* <UserGreeting /> */}
//       {/* <EventClick /> */}
//       {/* <ParentComponent /> */}
//       {/* <Message />
//       <Hello />
//       <Header />
//       <Hello />
//       <Greet first_name="grreeet" last_name="greet" />
//       <Wellcome first_name="Keyur_class" last_name="Patel_class" /> */}
//       {/* <FunctionOnClick />
//       <ClickHandle /> */}
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ParentComp /> */}
        {/* <RefDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}
        {/* <PortalDemo /> */}
        {/* <ErrorBoundry>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundry > */}

        {/* 
        <ErrorBoundry>
          <Hero heroName="Batman" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName="Superman" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName="Joker" />
        </ErrorBoundry> */}
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
