function getCurrentYear() {
    let footerLabel = document.querySelector('#year');
    footerLabel.textContent = `Leandro BS - ${new Date().getFullYear()}`;
}

function start() {
    getCurrentYear();
}

start();