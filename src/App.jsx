import './App.css'
import * as React from 'react';
import {Header, Footer, Content, Button, Home, Lab_2, LoginForm, Crazy, DataGridDemo, TApp} from './components'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [studentList,setStudentList]=React.useState([]);
  React.useEffect(()=>{
    async function fetchStudentList(){
      try{
        const requesUrl = 'https://randomuser.me/api';
        const peronse =await fetch(requesUrl);
        const reponseJSON= await peronse.json()
        setStudentList(reponseJSON);
      }catch{}
    }
    fetchStudentList();
  },[]);
  return (
    <>
    <Header>

      <Content>
        <p>Основной материал разработки</p>
        <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/meinfo' element={<Home/>}/> 
        <Route path='/Lab_2' element={<Button/>}/>
        <Route path='/Lab_3' element={<Lab_2 />}/>
        <Route path='/Lab_4' element={<Header/>}/>
        <Route path='/Lab_5' element={<LoginForm/>}/>
        <Route path='/Lab_6' element={<Crazy/>}/>
        <Route path='/Lab_8' element={<DataGridDemo/>}/>
        <Route path='/lab_9' element={<TApp/>}/>
        </Routes>
      </Content>
      <Footer>
        <p> Новиков И.О.   2024</p>
      </Footer>
      </Header>
    </>
  )
}
export default App
