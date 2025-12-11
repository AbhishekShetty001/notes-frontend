const API = "http://localhost:9999";

// GET ALL NOTES
async function getAllNotes() {
    return fetch(`${API}/notes`).then(res => res.json());
}

// GET NOTE BY ID
async function getNoteById(id) {
    return fetch(`${API}/notes/${id}`).then(res => res.json());
}

// CREATE NOTE
async function createNote(note) {
    return fetch(`${API}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    });
}

// UPDATE NOTE
async function updateNote(id, note) {
    return fetch(`${API}/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    });
}

// DELETE NOTE
async function deleteNote(id) {
    return fetch(`${API}/notes/${id}`, {
        method: "DELETE"
    });
}

// GENERATE SHARE LINK
async function generateShareLink(id) {
    return fetch(`${API}/notes/${id}/share`, { method: "POST" })
        .then(res => res.text());
}

// PUBLIC NOTE
async function getPublicNote(shareId) {
    return fetch(`${API}/public/${shareId}`).then(res => res.json());
}
