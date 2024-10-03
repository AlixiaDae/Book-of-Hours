export default class Notes {
  constructor() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }

  addNote(newNote) {
    this.notes.push(newNote);
  }

  deleteNote(noteBody) {
    this.notes = this.notes.filter((note) => note.body !== noteBody);
  }
}
