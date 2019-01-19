import cookie from 'js-cookie';
import Head from 'next/head';
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

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: props.loggedIn
        };
    }

    componentDidMount() {
        const {loggedIn} = this.state;

        if (!loggedIn) {
            addChatlioScript();
        }
    }

    render() {
        const {loggedIn} = this.state;
        const title = 'Chatlio Proof of Concept';

        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8"/>
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
                    <meta content="width=device-width, initial-scale=1" name="viewport"/>
                    <link href="https://unpkg.com/reset-css@4.0.1/reset.css" rel="stylesheet"/>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                                html {
                                    box-sizing: border-box;
                                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                                    min-width: 320px;

                                    *,
                                    *::before,
                                    *::after {
                                        box-sizing: inherit;
                                    }
                                }

                                body {
                                    background-color: #fff;
                                    color: #000;
                                    font-size: 16px;
                                    margin: 20px;
                                    -webkit-font-smoothing: antialiased;
                                    line-height: 1.75;
                                    text-rendering: optimizeLegibility;
                                }

                                h1 {
                                  font-size: 36px;
                                  font-weight: 400;
                                  line-height: 1.333;
                                  margin-bottom: 20px;
                                }

                                ::selection {
                                  background-color: #79FFE1;
                                  color: #000;
                                }
                            `
                        }}
                    />
                </Head>
                <main>
                    <h1>{title}</h1>
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
                        <style jsx>
                            {`
                                button {
                                  color: #fff;
                                  background: #000;
                                  display: inline-block;
                                  width: 200px;
                                  height: 50px;
                                  border: 2px solid #000;
                                  font-size: 12px;
                                  text-transform: uppercase;
                                  transition: background 0.2s ease, color 0.2 ease, color 0.2 ease;
                                  cursor: pointer;
                                  text-align: center;
                                  user-select: none;
                                  position: relative;
                                  overflow: hidden;
                                  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
                                  border-radius: 5px;
                                }

                                button:hover {
                                  border: 2px solid #000;
                                  background: transparent;
                                  color: #000;
                                }
                              `}
                        </style>
                    </button>
                </main>
            </>
        )
    }
}
