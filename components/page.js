import Head from 'next/head'

import Chatlio from './chatlio'
import Navigation from "./navigation";

const Page = ({chatlio, children, title}) =>
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
                            height: 100%;
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
                            height: 100%;
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
            <Navigation />
            {children}
            {chatlio && <Chatlio />}
        </main>
    </>

export default Page
