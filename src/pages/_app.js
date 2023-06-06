import "@/styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>TLW fans</title>
				<link rel="icon" href="/assets/logos/LogoTill-72dpi.jpg" />
        <link rel="shortcut icon" href="/assets/logos/LogoTill-72dpi.jpg" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/jpg" sizes="32x32" href="/assets/logos/LogoTill-72dpi.jpg"/>
          <link rel="icon" type="image/jpg" sizes="16x16" href="/assets/logos/LogoTill-72dpi.jpg"/>
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
