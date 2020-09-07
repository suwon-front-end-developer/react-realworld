import React from 'react';

function FeedToggle() {
  return (
    // TODO: Warpper div className is feed-toggle or articles-toggle
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a className="nav-link active">Your Feed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Global Feed</a>
        </li>
      </ul>
    </div>
  );
}

export default FeedToggle;
