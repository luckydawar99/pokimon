import React from 'react'
import { useSelector,useDispatch } from 'react-redux' 
import { removeTodo } from '../feature/todo/todoSlice'

const RemoveTodos = () => {
const todos = useSelector((state=>state.todos))
 const dispatch = useDispatch();
  return (
 <>
 <div>RemoveTodos</div>
 {
    todos.map((todo)=>
    <li key={todo.id}>
    {todo.text}
    <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
    </li>
    )
 }
 </>
  )
}

export default RemoveTodos