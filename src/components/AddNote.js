import React, {useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({title:"", description:"", tag:""});

    const handleClick = (e)=>{
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title:"", description:"", tag:""});
      props.showAlert("Added Successfully", "success")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name = "title"
            value = {note.title}
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange = {onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Desription</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name = "description"
            value = {note.description}
            placeholder="Enter Description"
            onChange = {onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name = "tag"
            value = {note.tag}
            placeholder="Enter Tag"
            onChange = {onChange}
            minLength={5}
            required
          />
        </div>

        <button 
        disabled = {note.title.length < 5 || note.description.length < 5}
        type="submit" className="btn btn-primary my-2"
        onClick = {handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
