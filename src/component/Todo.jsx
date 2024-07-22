import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({props, deleteTodo, check, toggleIsEditing, editTodo}) {
    return props.isEditing 
    
        ? (<EditForm props={props} editTodo={editTodo}/>)

        :(<div className={`todo ${props.isCompleted ? 'completed' : ''}`}>
            <p onClick={() => {check(props.id)}}>{props.content}</p>
            <div>
                <MdEdit onClick={() => {toggleIsEditing(props.id)}}  
                style={{cursor: 'pointer'}} />
                <MdDelete onClick={() => {deleteTodo(props.id)}} 
                style={{cursor: 'pointer', marginLeft: '5px'}}/>
            </div>
        </div>)
    
}

export default Todo