import React from 'react'
import { GoDot, GoDotFill } from "react-icons/go";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";

function Todos({ todos }) {

  const handleCompletion = async (todoId) => {

    const url = 'http://localhost:3000/completed';
    const data = { id: todoId };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const responseData = await response.json();
      console.log(responseData.msg);
    } catch (error) {
      console.error(error.message);
    }
  };


  return <div>
    {todos.map(function(todo) {
        return <div key={todo._id} className='relative items flex items-center justify-start text-zinc-300 px-8 py-4'>
                <span>
                    <GoDot size={"1.5em"}/>
                </span>
                <h2 className='font-bold text-xl mr-auto ml-5'>{todo.title}</h2>
                <button onClick={() => handleCompletion(todo._id)}>{todo.completion == true ? <IoCheckboxOutline />  : <MdCheckBoxOutlineBlank /> } </button>
        </div>
    })}

  </div>
}

export default Todos