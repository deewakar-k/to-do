import React, { useEffect, useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import Todos from './Todos';
import CreateTodo from './CreateTodo';


function Card() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(async function (res){
                const json = await res.json();
                setTodos(json.todos);
        })
    }, [])

  return (
    <div className='relative w-1/4 h-3/4 rounded-[35px] bg-zinc-900 text-white'>
        <div className='flex items-center justify-start'>
            <span className='flex items-center justify-center w-8 h-8 m-5 mt-7'>
                <CiCalendar size={"2em"}/>
            </span>
            <h1 className='font-bold text-4xl mr-auto mt-1'>today</h1>
        </div>
        <div>
            <Todos todos={todos}/>
        </div>
        <div className='absolute bottom-5 w-full p-8 flex justify-between'>
            <CreateTodo />
            <span className='mt-5'>
                <button>
                    clear
                </button>
            </span>
        </div>
    </div>
  )
}

export default Card