import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { useEffect } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NoteForm from '../../components/NoteForm/NoteForm';
import NoteHistoryPage from '../NoteHistoryPage/NoteHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NewNotePage from '../NewNotePage/NewNotePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNote] = useState([])
  const [showNotes, setShowNotes] = useState(true)

  useEffect(() => {
    const storedNote = localStorage.getItem('notes');
    if (storedNote) {
      setNote(JSON.parse(storedNote));
    }
  }, []);

  function addNote(note) {
    const updatedNote = [...notes, note];
    setNote(updatedNote);
    localStorage.setItem('notes', JSON.stringify(updatedNote));
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <NoteForm addNote={addNote} />
            <h1>Notes</h1>
            { showNotes && <NoteHistoryPage user={user} notes={notes} />}
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
