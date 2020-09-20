import Link from 'next/link';
import React from 'react';

function ArticleBanner() {
  return (
    <div className="banner">
      <div className="container">
        <h1>Why</h1>
        <div className="article-meta">
          <a>
            <img
              src="https://avatars0.githubusercontent.com/u/68723614?s=400&amp;u=9676acd378ca0802e86a17f845a536af648497e0&amp;v=4"
              alt="author profile image"
            />
          </a>
          <div className="info">
            <a className="author">devJang</a>
            <span className="date">Wed Sep 02 2020</span>
          </div>
          <span>
            <Link href="/editor/{slug}">
              <a className="btn btn-outline-secondary btn-sm">
                <i className="ion-edit"></i>
              </a>
            </Link>
            <button className="btn btn-outline-danger btn-sm">
              <i className="ion-trash-a"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleBanner;
