import { useState } from "react";

function EditForm({props, editTodo}) {

    const [content, setContent] = useState(props.content);

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(props.id, content)
    }

    return (
    <form className="create-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter you todo" value={content} 
        onChange={(e) => {setContent(e.target.value)}}/>
        <button type="submit">edit</button>
    </form>
    );
}

export default EditForm