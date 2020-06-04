'use strict';

const cdb = React.createElement;

function createClock() {
    return cdb('button', null, new Date().toLocaleTimeString());
}

function renderCdm() {
    ReactDOM.render(createClock(), document.querySelector('#date_container'));
}

renderCdm();
setInterval(renderCdm, 1000);
