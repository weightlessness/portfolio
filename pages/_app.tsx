import React, {useEffect, useRef} from "react";
import '../styles/globals.css'
import {wrapper} from "../redux/store";
import Head from "next/head";
import Router, {useRouter} from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from "../components/Layout";
import layoutData from './../public/layout.json';
import {MediaContextProvider} from "../lib/media";
import ModalController from "../components/ModalController";


const MyApp = ({Component, pageProps}) => {

    const router = useRouter();
    const refSlug = useRef(router.asPath.indexOf('?') !== -1 ? router.asPath.substring(0, router.asPath.indexOf('?')) : router.asPath)


    useEffect(() => {
        const startProgressBar = (url: string) => {
            const urlWithoutParams = url.indexOf('?') !== -1 ? url.substring(0, url.indexOf('?')) : url
            if (urlWithoutParams !== refSlug.current) {
                refSlug.current = urlWithoutParams
                NProgress.start()
            }
        }

        const endProgressBar = () => {
            NProgress.done()
        }
        Router.events.on('routeChangeStart', startProgressBar)
        Router.events.on('routeChangeComplete', endProgressBar);
        Router.events.on('routeChangeError', endProgressBar);
        return () => {
            Router.events.off('routeChangeStart', startProgressBar)
            Router.events.off('routeChangeComplete', endProgressBar);
            Router.events.off('routeChangeError', endProgressBar);
        }
    }, [])

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            </Head>
            <MediaContextProvider>
                <Layout layoutData={layoutData.data}>
                    <Component {...pageProps}/>
                </Layout>
            </MediaContextProvider>
            <ModalController/>
        </>
    )
}



export default wrapper.withRedux(MyApp);
