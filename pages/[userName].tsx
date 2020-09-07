import React from 'react';

import ArticlePreview from '../components/ArticlePreview';
import FeedToggle from '../components/FeedToggle';
import Layout from '../components/Layout';
import ProfileBanner from '../components/ProfileBanner';

function Profile() {
  return (
    <Layout title="Condit">
      <div className="profile-page">
        <ProfileBanner />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <FeedToggle />
              <div>
                {[1, 2, 3, 4].map((_, i) => (
                  <ArticlePreview key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
