const params = new URLSearchParams(window.location.search);
const shareId = params.get("shareId");

document.addEventListener("DOMContentLoaded", async () => {
    const note = await getPublicNote(shareId);

    document.getElementById("note").innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.content}</p>
    `;
});
