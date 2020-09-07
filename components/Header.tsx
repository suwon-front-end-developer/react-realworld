import React from 'react';
import Link from 'next/link';

const NavItems = () => {
	return (
		<ul className="nav navbar-nav pull-xs-right">
			<Link href="/">
				<li className="nav-item">
					<a className="nav-link active">Home</a>
				</li>
			</Link>
			<Link href="/login">
				<li className="nav-item">
					<a className="nav-link active">Sign in</a>
				</li>
			</Link>
			<Link href="/register">
				<li className="nav-item">
					<a className="nav-link active">Sigin up</a>
				</li>
			</Link>
		</ul>
	);
};

const AuthNavItems = () => {
	return (
		<ul className="nav navbar-nav pull-xs-right">
			<Link href="/">
				<li className="nav-item">
					<a className="nav-link">Home</a>
				</li>
			</Link>
			<Link href="/editor">
				<li className="nav-item">
					<a className="nav-link">
						<i className="ion-compose"></i> New Post
					</a>
				</li>
			</Link>
			<Link href="/settings">
				<li className="nav-item">
					<a className="nav-link">
						<i className="ion-gear-a"></i> Settings
					</a>
				</li>
			</Link>
			<Link href="/[userName]">
				<li className="nav-item">
					<a className="nav-link">
						<img
							src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
							className="user-pic"
						/>
						devJang
					</a>
				</li>
			</Link>
		</ul>
	);
};

function Header() {
	return (
		<header>
			<nav className="navbar navbar-light">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">conduit</a>
					</Link>
					<AuthNavItems />
				</div>
			</nav>
		</header>
	);
}

export default Header;
