import axios from "axios"; 
import React from "react"; 
import { useEffect, useState } from "react";
import flower from '../img/flower.png';

  
function Todo() {   
    const [todoList, setTodoList] = useState([]); 
    const [editableId, setEditableId] = useState(null); 
    const [editedTask, setEditedTask] = useState(""); 
    const [editedStatus, setEditedStatus] = useState(""); 
    const [newTask, setNewTask] = useState(""); 
    const [newStatus, setNewStatus] = useState(""); 
    const [newDeadline, setNewDeadline] = useState(""); 
    const [editedDeadline, setEditedDeadline] = useState(""); 
  
    // Fetch tasks from database    
    useEffect(() => { 
        axios.get('http://127.0.0.1:3001/getTodoList') 
            .then(result => { 
                setTodoList(result.data) 
            }) 
            .catch(err => console.log(err)) 
    }, []) 
  
    // Function to toggle the editable state for a specific row 
    const toggleEditable = (id) => { 
        const rowData = todoList.find((data) => data._id === id); 
        if (rowData) { 
            setEditableId(id); 
            setEditedTask(rowData.task); 
            setEditedStatus(rowData.status); 
            setEditedDeadline(rowData.deadline || ""); 
        } else { 
            setEditableId(null); 
            setEditedTask(""); 
            setEditedStatus(""); 
            setEditedDeadline(""); 
        } 
    }; 
  
  
    // Function to add task to the database 
    const addTask = (e) => { 
        e.preventDefault(); 
        if (!newTask || !newStatus || !newDeadline) { 
            alert("All fields must be filled out."); 
            return; 
        } 
  
        axios.post('http://127.0.0.1:3001/addTodoList', { task: newTask, status: newStatus, deadline: newDeadline }) 
            .then(res => { 
                console.log(res); 
                window.location.reload(); 
            }) 
            .catch(err => console.log(err)); 
    } 
  
    // Function to save edited data to the database 
    const saveEditedTask = (id) => { 
        const editedData = { 
            task: editedTask, 
            status: editedStatus, 
            deadline: editedDeadline, 
        }; 
  
        // If the fields are empty 
        if (!editedTask || !editedStatus || !editedDeadline) { 
            alert("All fields must be filled out."); 
            return; 
        } 
  
        // Updating edited data to the database through updateById API 
        axios.post('http://127.0.0.1:3001/updateTodoList/' + id, editedData) 
            .then(result => { 
                console.log(result); 
                setEditableId(null); 
                setEditedTask(""); 
                setEditedStatus(""); 
                setEditedDeadline(""); // Clear the edited deadline 
                window.location.reload(); 
            }) 
            .catch(err => console.log(err)); 
    } 
  
  
    // Delete task from database 
    const deleteTask = (id) => { 
        axios.delete('http://127.0.0.1:3001/deleteTodoList/' + id) 
            .then(result => { 
                console.log(result); 
                window.location.reload(); 
            }) 
            .catch(err => 
                console.log(err) 
            ) 
    } 
  
    return ( 
        <div className="container mt-5" id='todopage'>
        <img src={flower} id='flow'></img>
        <img src={flower} id='flow2'></img>
        
        <h2 style={{textAlign:'center',marginTop:'-1rem',fontFamily:'Chakra Petch',fontWeight:'bold',color:'#004687'} } class='todotitle'>Todo List Manager</h2> 
            <div className="row mt-5 " > 
            <div className="col-md-4 "> 
                    <h4 className="text-center" id='tlm'>Add Task</h4> 
                    <form className="bg-transparent p-4" id='left'> 
                        <div className="mb-3"> 
                            <label style={{color:'white'}}>Task</label> 
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="Enter Task"
                                onChange={(e) => setNewTask(e.target.value)} 
                            /> 
                        </div> 
                        <div className="mb-3"> 
                            <label style={{color:'white'}}>Status</label> 
                            <input 
                                className="form-control"
                                type="text"
                                placeholder="Enter Status"
                                onChange={(e) => setNewStatus(e.target.value)} 
                            /> 
                        </div> 
                        <div className="mb-3"> 
                            <label style={{color:'white'}}>Deadline</label> 
                            <input 
                                className="form-control"
                                type="datetime-local"
    
                                onChange={(e) => {setNewDeadline(e.target.value);console.log(e.target.value)}} 
                            /> 
                        </div> 
                        <button onClick={addTask} className="btn btn-light mt-2 btn-sm"> 
                            Add Task 
                        </button> 
                    </form> 
                </div> 
                <div className="col-md-7"> 
                    <h4 className="text-center" id='tlm'>Todo List</h4> 
                    <div className="table-responsive" id='t1'> 
                        <table  className="table" id='tab'> 
                            <thead class="table-transparent" > 
                                <tr style={{textAlign:'center'}}> 
                                    <th>Task</th> 
                                    <th>Status</th> 
                                    <th>Deadline</th> 
                                    <th>Actions</th> 
                                </tr> 
                            </thead> 
                            {Array.isArray(todoList) ? ( 
                                <tbody> 
                                    {todoList.map((data) => ( 
                                        <tr key={data._id}> 
                                            <td> 
                                                {editableId === data._id ? ( 
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                        value={editedTask} 
                                                        onChange={(e) => setEditedTask(e.target.value)} 
                                                    /> 
                                                ) : ( 
                                                    data.task 
                                                )} 
                                            </td> 
                                            <td> 
                                                {editableId === data._id ? ( 
                                                    <input 
                                                        type="text"
                                                        className="form-control"
                                                        value={editedStatus} 
                                                        onChange={(e) => setEditedStatus(e.target.value)} 
                                                    /> 
                                                ) : ( 
                                                    data.status 
                                                )} 
                                            </td> 
                                            <td> 
                                                {editableId === data._id ? ( 
                                                    <input 
                                                        type="datetime-local"
                                                        className="form-control"
                                                        value={editedDeadline} 
                                                        onChange={(e) => setEditedDeadline(e.target.value)} 
                                                    /> 
                                                ) : ( 
                                                    data.deadline ? new Date(data.deadline).toLocaleString() : ''
                                                )} 
                                            </td> 
  
                                            <td > 
                                                {editableId === data._id ? ( 
                                                    <button className="btn  btn-sm" id='edit' onClick={() => saveEditedTask(data._id)}> 
                                                        Save 
                                                    </button> 
                                                ) : ( 
                                                    <button className="btn  btn-sm " id='edit' onClick={() => toggleEditable(data._id)}> 
                                                        Edit 
                                                    </button> 
                                                )} 
                                                <button className="btn  btn-sm ml-1 " id='del' onClick={() => deleteTask(data._id)}> 
                                                    Delete 
                                                </button> 
                                            </td> 
                                        </tr> 
                                    ))} 
                                </tbody> 
                            ) : ( 
                                <tbody> 
                                    <tr> 
                                        <td colSpan="4">Loading products...</td> 
                                    </tr> 
                                </tbody> 
                            )} 
  
  
                        </table> 
                    </div> 
                </div> 
                
  
            </div> 
            <style>
  @import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400&family=Aladin&family=Chakra+Petch:ital,wght@1,300&display=swap');
</style>
        </div> 
    ) 
} 
export default Todo;