import Notes from "./notes.js";
import Note from "./note.js";

export default class NoteStorage {
  constructor(name) {
    this.name = name;
  }

  saveNotes(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  getNotes() {
    const notes = Object.assign(
      new Notes(),
      JSON.parse(localStorage.getItem(this.name))
    );

    notes.setNotes(
      notes.getNotes().map((note) => Object.assign(new Note(), note))
    );

    return notes;
  }

  addNote(noteObject) {
    const notes = this.getNotes();
    notes.addNote(noteObject);
    this.saveNotes(notes);
  }

  deleteNote(noteBody) {
    const notes = this.getNotes();
    notes.deleteNote(noteBody);
    this.saveNotes(notes);
  }
}
