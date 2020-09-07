import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = 'Conduit' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
			<link
				href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
				rel="stylesheet"
				type="text/css"
			/>
			<link rel="stylesheet" href="//demo.productionready.io/main.css" />
		</Head>
		<Header />

		{children}

		<footer>
			<div className="container">
				<a className="logo-font" href="/">
					conduit
				</a>
				<span className="attribution">
					© 2020. An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code licensed under
					MIT.
				</span>
			</div>
		</footer>
	</div>
);

export default Layout;
