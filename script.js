function openAll() {
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("music").play();

    const paragraphs = document.querySelectorAll(".message p");
    paragraphs.forEach((p, i) => {
        p.style.setProperty("--i", i);
    });
}
