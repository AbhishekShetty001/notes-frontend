const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
    const note = await getNoteById(id);
    document.getElementById("title").value = note.title;
    document.getElementById("content").value = note.content;
});

document.getElementById("editForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const updatedNote = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    };

    await updateNote(id, updatedNote);

    window.location.href = "index.html";
});
