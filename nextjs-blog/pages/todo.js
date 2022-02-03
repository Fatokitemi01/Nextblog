import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import { useState } from 'react'



export default function Todo() {
const[userInput,setUserInput] =useState('')
//create state props
const[todoList,setTodoList] =useState([])
const handleChange = (e) =>{
    e.preventDefault();
    setUserInput(e.target.value)
    console.log(userInput)
}

//handling submit
const handleSubmit =(e)=>{

setTodoList([...todoList,{elt:userInput}])
console.log(todoList)
setUserInput(' ')
}

//delete functionality
const handleDelete =(todo)=>{
  const updatedArr = todoList.filter(todoItem=> todoList.indexOf(todoItem) != todoList.indexOf(todo) )

  setTodoList(updatedArr)
}

  return (
    <>
    <Head>
    <title>Todo List</title>
    </Head>
    <h1>TodoList App</h1>
        <input type="text" placeholder="enter a todo item"value={userInput} onChange={handleChange}/>
        <button  onClick={handleSubmit}>Submit</button>
     <ul>
       {
       todoList.length>=1 ? todoList.map((todo,idx) =>{
         return <li key={idx}>{todo.elt}<button onClick ={(e) =>{
           e.preventDefault()
           handleDelete(todo)
        
        }}  >Delete</button></li>
       })
       :'Enter a Todo Item'

      }
     </ul>


        <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      
      
    </>
    
  )
}



