import cookie from 'js-cookie';
import cookies from 'next-cookies'
import {Component} from 'react';
import Button from '../components/button'
import Page from '../components/page'

class Index extends Component {
    static async getInitialProps(ctx) {
        const {loggedIn} = cookies(ctx);

        return {loggedIn};
    }

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: props.loggedIn
        };
    }

    render() {
        const {loggedIn} = this.state;

        return (
            <Page
                chatlio={!loggedIn}
                title="Chatlio Proof of Concept"
            >
                <Button onClick={() => {
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
                </Button>
            </Page>
        )
    }
}

export default Index
