'use strict';

const d = React.createElement;

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: null,
        };
    }

    componentDidMount() {
        fetch("http://localhost:9090/api/v1/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, user} = this.state;
        if (error) {
            return d(
                'div',
                {},
                `Ошибка: + ${error.message}`
            )
        } else if (!isLoaded) {
            return d(
                'div',
                {},
                'Loading...'
            )
        } else {
            return d(
                'ul',
                null,
                d("li", null, user.firstName),
                d("li", null, user.lastName)
            )
        }
    }
}

const dCon = document.querySelector('#r_loader_container');
ReactDOM.render(d(Loader), dCon);
