import cookie from 'js-cookie';
import cookies from 'next-cookies'
import {Component} from 'react';

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

    render() {
        const {loggedIn} = this.state;

        return (
            <main>
                <header>
                    <h1>Chatlio Proof of Concept</h1>
                    <button onClick={() => {
                        if (loggedIn) {
                            cookie.remove('loggedIn');
                        } else {
                            cookie.set('loggedIn', true);
                        }

                        this.setState({
                            loggedIn: !loggedIn
                        });
                    }}>
                        {loggedIn ? 'Logout' : 'Login'}
                    </button>
                </header>
            </main>
        )
    }
}
