'use strict';

const cdb = React.createElement;

class MyClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return cdb('button', null, this.state.date.toLocaleTimeString());
    }

    tick() {
        this.setState({date: new Date()})
    }
}

ReactDOM.render(cdb(MyClock, null, null), document.querySelector('#date_container'));

