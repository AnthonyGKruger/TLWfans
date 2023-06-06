import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>TLW fans</title>
        <link rel="icon" href="/assets/logos/LogoTill-72dpi.jpg"/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
