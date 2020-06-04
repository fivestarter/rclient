'use strict';

const clockProps = React.createElement;

function Clock(props) {
    return clockProps('button', null, props.date.toLocaleTimeString());
}

function renderClock() {
    ReactDOM.render(clockProps(Clock, {date: new Date()}, null), document.querySelector('#props_container'));
}

renderClock();
setInterval(renderClock, 1000);