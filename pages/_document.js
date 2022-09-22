import React from "react";
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {mediaStyles} from "../lib/media";
import {Colors} from "../constants/colors";

export default class NotDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }


    render() {

        return (
            <Html lang="ru">
                <Head>
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{ __html: mediaStyles }}

                    />
                    <meta charSet="UTF-8"/>
                    {this.props.styleTags}
                    <link rel="stylesheet" href="/fonts.css"/>

                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                    <meta name="msapplication-TileColor" content={Colors.BRAND}/>
                    <meta name="theme-color" content={Colors.BRAND}/>
                    <meta name="p:domain-verify" content="3db2fd353678402c6eb46c5c07b21cdf"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>              

                </body>
            </Html>
        );
    }
}

