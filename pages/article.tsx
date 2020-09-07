import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import ArticleBanner from '../components/ArticleBanner';

function Article() {
	return (
		<Layout title="article">
			<ArticleBanner />
			<div className="article-page">
				<div className="container page">
					<div className="row article-content">
						<div className="col-xs-12">
							<div>
								<h1 id="world">world</h1>
							</div>
							<ul className="tag-list">
								<li className="tag-default tag-pill tag-outline">suwon</li>
							</ul>
						</div>
					</div>
					<hr />
					<div className="article-actions"></div>
					<div className="row">
						<div className="col-xs-12 col-md-8 offset-md-2">
							<div>
								<form className="card comment-form">
									<div className="card-block">
										<textarea className="form-control" placeholder="Write a comment..." rows={3} />
									</div>
									<div className="card-footer">
										<img
											src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
											className="comment-author-img"
										/>
										<button className="btn btn-sm btn-primary" type="submit">
											Post Comment
										</button>
									</div>
								</form>
							</div>
							<div>
								<div className="card">
									<div className="card-block">
										<p className="card-text">Goo2</p>
									</div>
									<div className="card-footer">
										<Link href="/[userName]">
											<a className="comment-author">
												<img
													src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
													className="comment-author-img"
												/>
											</a>
											<a className="comment-author">devJang</a>
										</Link>
										<span className="date-posted">Wed Sep 02 2020</span>
										<span className="mod-options">
											<i className="ion-trash-a"></i>
										</span>
									</div>
								</div>
								<div className="card">
									<div className="card-block">
										<p className="card-text">Good</p>
									</div>
									<div className="card-footer">
										<Link href="/[userName]">
											<a className="comment-author">
												<img
													src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
													className="comment-author-img"
												/>
											</a>
											<a className="comment-author">devJang</a>
										</Link>
										<span className="date-posted">Wed Sep 02 2020</span>
										<span className="mod-options">
											<i className="ion-trash-a"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Article;
