import React from 'react';
import Link from 'next/link';

function ProfileBanner() {
	return (
		<div className="user-info">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-10 offset-md-1">
						<img
							src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
							className="user-img"
						/>
						<h4>devJang</h4>
						<p></p>
						<Link href="/settings">
							<a className="btn btn-sm btn-outline-secondary action-btn">
								<i className="ion-gear-a"></i>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileBanner;
