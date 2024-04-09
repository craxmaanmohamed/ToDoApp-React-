import { useState } from 'react'
import './TodoApp.css'
function TodoApp() {
    const [tasks,setTasks]=useState([])
    const [newtasks,setnewTasks]=useState([])
    // handling newtasks
    function HandleData(event){
        setnewTasks(event.target.value)
    }
    // Adding tasks

    function AddTask(){
        if(newtasks ==""){
            alert("please Enter Tasks")
        }
        else{
            setTasks([...tasks,{index: Date.now(),done:false,texts:newtasks}])
            setnewTasks("")
        }
      
    }
    // Deleting Tasks
    function DeletingTasks(index){
        setTasks(tasks.filter((_,i)=> i !==index))
    }
    // line-through
    function line_through(index){
        setTasks(tasks.map((items)=>(
            items.index == index? {...items,done : !items.done}:items
        )))
    }


   
    return (
      <>
       <div className="container">
        <h1>Todo List App</h1>
        {/* input and add button */}
        <div className="Add_input">
            <input type="text" placeholder='Enter text...' value={newtasks} onChange={HandleData}/>
            <button onClick={AddTask}>+</button>

        </div>
        {/* body Text */}
        {tasks.map((items,index)=>(
                <div className="bodoytodo">

                <div className="check_p">
                    <input type="checkbox" onClick={()=>line_through(items.index)}/> 
                    <p key={index} style={{textDecoration:items.done?"solid line-through 3px green":""}} >{items.texts}</p>
                </div>
                <div className="delete">
                <button onClick={()=> DeletingTasks(index)}>Delete</button>
        
                </div>
                </div>
        ))}
    

       </div>
      </>
    )
  }
  
  export default TodoApp
  