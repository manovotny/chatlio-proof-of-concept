import cookie from 'js-cookie';
import cookies from 'next-cookies'
import {Component} from 'react';

const addChatlioScript = () => {
    const script = document.createElement('script');

    script.id = 'chatlio-script';
    script.src = '/static/chatlio.js';
    script.async = true;

    document.body.appendChild(script);
};

const removeChatlioScript = () => {
    const script = document.getElementById('chatlio-script');
    const widgit = document.getElementById('chatlio-widget');

    document.body.removeChild(script);
    document.body.removeChild(widgit);
};

export default class extends Component {
    static async getInitialProps(ctx) {
        const {loggedIn} = cookies(ctx);

        return {loggedIn};
    }

    constructor (props) {
        super(props);

        this.state = {
            loggedIn: props.loggedIn
        };
    }

    componentDidMount () {
        const {loggedIn} = this.state;

        if (!loggedIn) {
            addChatlioScript();
        }
    }

    render() {
        const {loggedIn} = this.state;

        return (
            <main>
                <h1>Chatlio Proof of Concept</h1>
                <button onClick={() => {
                    if (loggedIn) {
                        cookie.remove('loggedIn');
                        addChatlioScript();
                    } else {
                        cookie.set('loggedIn', true);
                        removeChatlioScript();
                    }

                    this.setState({
                        loggedIn: !loggedIn
                    });
                }}>
                    {loggedIn ? 'Logout' : 'Login'}
                </button>
            </main>
        )
    }
}
