import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'



export default function FirstPost() {
const[userInput,setUserInput] =useState('')
//create state props
const[todoList,setTodoList] =useState([])
const handleChange = (e) =>{
    e.preventDefault();

    setUserInput = (e.target.value)
    console.log(setUserInput)
}

//handling submit
const handleSubmit =(e)=>{

setTodoList({
  setUserinput,
  ...todoList

})

}

  return (
    <>
    <Head>
    <title>Todo List</title>
    </Head>
 
    0.
    
    <h1>TodoList App</h1>
    <form>
        <input type="text" onChange={handleChange}/><button onClick={handleSubmit}>Submit</button>
        </form>
     <ul>
       {
       todoList.length>=1 ? todoList.map((todo,idx) =>{
         return <li key={idx}>{todo}</li>
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
