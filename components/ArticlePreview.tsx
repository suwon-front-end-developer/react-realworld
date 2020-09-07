import React from 'react';
import Link from 'next/link';

function ArticlePreview() {
	return (
		<div className="article-preview">
			<div className="article-meta">
				<Link href="/[userName]">
					<React.Fragment>
						<a>
							<img src="https://cdn.cnn.com/cnnnext/dam/assets/190410090959-01-black-hole-event-horizon-telescope-exlarge-169.jpg" />
						</a>
						<div className="info">
							<a className="author">yomogan</a>
							<span className="date">Sun Sep 06 2020</span>
						</div>
					</React.Fragment>
				</Link>
				<div className="pull-xs-right">
					<button className="btn btn-sm btn-outline-primary">
						<i className="ion-heart"></i>
					</button>
				</div>
			</div>
			<Link href="/article/[slug]">
				<a className="preview-link">
					<h1>test_yomogan_06_september</h1>
					<p>test_yomogan_06_september</p>
					<span>Read more...</span>
					<ul className="tag-list">
						<li className="tag-default tag-pill tag-outline">dragons</li>
						<li className="tag-default tag-pill tag-outline">test</li>
					</ul>
				</a>
			</Link>
		</div>
	);
}

export default ArticlePreview;
