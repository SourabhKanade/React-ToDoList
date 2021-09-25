import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ListCom from "./ListCom";

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    const itemEvent = ( event ) => {
                setItem(event.target.value);
            };
    const listOfItems = () => {
                setNewItem  ((prevValue) => { 
                    return [...prevValue, item];
                    });
                setItem ("");
            };
    return (
         <>
            <div className = "main_div">
            <div className = "center_div">
              <br/>
              <h1>ToDoList</h1>
              <br/>
           <input type = "text" value={item} placeholder="Add an Items" onChange={itemEvent} />
           <Button  className = "newBtn" onClick={listOfItems}>
            <AddCircleSharpIcon/>
           </Button>
         <br/>    
         <ol>
        {newitem.map((val,index) => {
        return <ListCom key={index} text={val} />;
        })}
        </ol>
        <br/>
     </div>
  </div>
        </>
    );
};

export default ToDoList;