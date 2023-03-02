import Layout from "@/components/layout/layout";
import "../styles/global.css";
import { Reset } from "styled-reset";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
export default function App({ Component, pageProps }) {
	// GA 설정 시작
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		router.events.on("hashChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
			router.events.off("hashChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	// GA 설정 끝

	return (
		<>
			{/* GA 설정 시작 */}
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
				}}
			/>
			{/* GA 설정 끝 */}
			<Layout>
				<Head>
					<title>퀀타이즈랩스 | 퀀슘</title>
					<link rel="shortcut icon" href="/static/favicon.png" />
				</Head>
				<Reset />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
