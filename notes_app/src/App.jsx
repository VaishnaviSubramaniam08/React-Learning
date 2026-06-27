import {useState,useEffect} from "react";
import "./App.css";
function App(){
  const [title,setTitle]=useState("");
  const [text,setText]=useState("");
  const [notes,setNotes]=useState([]);
  const [search,setSearch]=useState("");
  const [editId,setEditId]=useState(null);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
   const handleSubmit = () => {
    if (title === "" || text === "") {
      alert("Please enter title and note");
      return;
    }

    if (editId !== null) {
      const updatedNotes = notes.map((note) =>
        note.id === editId
          ? { ...note, title: title, text: text }
          : note
      );

      setNotes(updatedNotes);
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        text,
      };

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setText("");
  };

  const deleteNote = (id) => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
  };

  const editNote = (note) => {
    setTitle(note.title);
    setText(note.text);
    setEditId(note.id);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  return(
    <div className="container">
      <h1>Notes App</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <textarea placeholder="Write your note.." value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <button onClick={handleSubmit}>{editId?"Update Note" : "Add Note"}</button>
      <input type="text" placeholder="Search.." className="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <div className="notes">
        {filteredNotes.map((note)=>(
          <div className="card" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          <button onClick={()=> editNote(note)}>Edit</button>
          <button
              className="delete"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>

          </div>
        ))}
      </div>
     </div>
  );
}
export default App;