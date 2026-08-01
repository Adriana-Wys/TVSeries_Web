const platform = document.body.dataset.platform;
const filtered = series.filter(show =>
    show.platform.class === platform
);
renderSeries(filtered);