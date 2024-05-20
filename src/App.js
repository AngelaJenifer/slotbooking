import React,{Component} from 'react';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import Navbar from './components/Navbar';
import TenTodos from './components/TenTodos';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
  
  <BrowserRouter>
  <div className="App">
  	<Navbar/>
    {/* <TenTodos/> */}
	<Routes>
  	<Route  exact path='/' element={<TodoList />} />
  	<Route path='/add' component={TodoInput} />
  	<Route path='/list' component={TodoList} />
	  </Routes>
  	</div>
  	</BrowserRouter>
  	
  	
  );
}

export default App;
