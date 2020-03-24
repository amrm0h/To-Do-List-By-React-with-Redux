import React from 'react';
import { Provider  } from "react-redux";
import store from "./store/store";




// import Comonents
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/Todolist";
import Footer from "./components/Footer";




import "../node_modules/normalize.css";

import './css/expensify.scss';



const App = (props) => {

  console.log(props);
  // console.log(finalState);



  return (
    <div className="site_container">
      <Header />
      <Form todos={finalState} />
      <TodoList />
      <Footer />
    </div>
  );
  
};

const finalState = store.getState();


const Jsx = () => (
  <Provider store={store}>
      <App {...finalState}/>
  </Provider>
);

export default Jsx;