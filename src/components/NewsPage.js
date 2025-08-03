import React from 'react';
import './NewsPage.css';
import newsImg from '../assets/news.jpg'; // Ensure this image exists

const NewsPage = () => (
  <section className="news-page">
    <div className="news-content">
      <div className="news-image">
        <img src={newsImg} alt="Company News" />
      </div>
      <div className="news-text">
        <h2>Company News</h2>
        <p>
          Stay informed with our latest updates — from new construction projects and successful
          partnerships to local community support. We're proud to contribute to progress in the region.
        </p>
        <p>
          Our commitment to innovation, sustainability, and excellence is reflected in every announcement.
          Check back regularly for insights into our journey and the milestones we celebrate.
        </p>
      </div>
    </div>
  </section>
);

export default NewsPage;
