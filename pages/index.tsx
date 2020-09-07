import React from 'react';

import ArticlePreview from '../components/ArticlePreview';
import FeedToggle from '../components/FeedToggle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import SideBar from '../components/SideBar';

function IndexPage() {
  return (
    <Layout title="Condit">
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <div>
                {[1, 2, 3, 4].map((_, i) => (
                  <ArticlePreview key={i} />
                ))}
              </div>
              <Pagination />
            </div>
            <div className="col-md-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
