function toggleChapter(id) {
    var chapter = document.getElementById(id);
    if (chapter.style.display === "none" || chapter.style.display === "") {
        chapter.style.display = "block";
    } else {
        chapter.style.display = "none";
    }
}
