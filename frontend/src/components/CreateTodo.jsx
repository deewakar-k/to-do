import React, { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import '../index.css'

function CreateTodo() {
    const [title, setTitle] = useState("");

    return (
        <div className="flex items-center space-x-4">
          <button className='rounded-[8px]'
                  onClick={()=> {
                    fetch('http://localhost:3000/todo', {
                      method: "POST",
                      body: JSON.stringify({
                        title: title
                      }),
                      headers: {
                        "Content-type": "application/json"
                      }
                  })
                      .then(async function(res) {
                        const json = await res.json();
                        alert("to do added!");
                      })
                  }}>
            <IoIosAdd size={"1.5em"}/>
          </button>
          <input className='form text-zinc-900 appearance-none' 
                  type="text" 
                  placeholder='add new item'
                  onChange={(e) => {
                    const value = e.target.value;
                    setTitle(e.target.value);
                  }}/>
        </div>
    )
}
  

export default CreateTodo