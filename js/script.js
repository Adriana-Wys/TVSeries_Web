const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const platforms = document.querySelector("#platforms");
platforms.addEventListener("change", function () {
    window.location.href = this.value;
});

const container = document.querySelector("#series");
function renderSeries(list) {
    container.innerHTML = "";
    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h2>Brak wyników</h2>
                <p>Nie znaleziono tytułu.</p>
            </div>
        `;
        return;
    }
    list.forEach(show => {
        container.innerHTML += `
        <div class="card">
            <img src="${show.image}" class="img">
            <div class="card-content">
            <span class="platform-${show.platform.class}">${show.platform.name}</span>
            <a href="${show.link}" target="_blank" rel="noopener noreferrer" class="link">Oglądaj</a>             
            <h3>${show.title}</h3>
            <h5>${show.genre}</h5>
            <p>${show.description}</p>
            </div>
        </div>
    `;
    });
}
renderSeries(series);

const genreFilter = document.querySelector("#genreFilter");
genreFilter.addEventListener("change", function () {
    if (this.value === "all") {
        renderSeries(series);
        return;
    }
    const filtered = series.filter(show =>
        show.genre.some(genre => genre.trim() === this.value)
    );
    renderSeries(filtered);
});

const search = document.querySelector("#search");
search.addEventListener("input", function () {
    const text = this.value.toLowerCase();
    const filtered = series.filter(show =>
        show.title.toLowerCase().includes(text)
    );
    renderSeries(filtered);
});