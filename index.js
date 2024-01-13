
const months = [`January`, `February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];

let now = new Date();
let month = months[now.getMonth()];
const currentDate = `${month} ${now.getDate()}, ${now.getFullYear()}`;


let spans = document.querySelectorAll(`span`);
spans.forEach((span) => (
    span.innerHTML = `${currentDate}`
));