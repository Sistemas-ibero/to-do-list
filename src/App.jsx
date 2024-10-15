import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'

function App() {

  return (
    <>
      <h1>ToDo list 📝</h1>
      <h3>Actidad: Integrar la funcionalidad del ToDo list</h3>
      <ToDoList />

      <a href="https://github.com/Sistemas-ibero/to-do-list" target="_blank"> Repositorio </a>
    </>
  )
}

export default App
