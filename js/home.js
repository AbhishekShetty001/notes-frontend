document.addEventListener("DOMContentLoaded", async () => {
    const notesDiv = document.getElementById("notes-container");
    const notes = await getAllNotes();

    notes.forEach(note => {
        const div = document.createElement("div");
        div.classList.add("note-card");

        div.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content.substring(0, 100)}...</p>

            <a href="edit.html?id=${note.id}">Edit</a>
            <button onclick="deleteNoteHandler(${note.id})">Delete</button>
            <button onclick="shareNoteHandler(${note.id})">Share</button>
        `;

        notesDiv.appendChild(div);
    });
});

async function deleteNoteHandler(id) {
    if (!confirm("Delete this note?")) return;
    await deleteNote(id);
    location.reload();
}

async function shareNoteHandler(id) {
    const shareId = await generateShareLink(id);
    alert(`Public Link: http://localhost:5173/public.html?shareId=${shareId}`);
}
