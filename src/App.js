
import { useState } from 'react';
import './App.css';
import {RiDeleteBin6Line} from 'react-icons/ri';
import "./App.css";
import TaskDisplay from './components/TaskDisplay';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {

 return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>}>
    <Route path='profile' element={<Profile/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route index  element={<TaskDisplay/>}/>
  </Route>
</Routes>
</BrowserRouter>
 )
}

export default App;
