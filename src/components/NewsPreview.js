import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './NewsPreview.css';
import newsImage from '../assets/news.jpg'; // replace with your image

const NewsPreview = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="news-preview" ref={ref}>
      <div className="news-left">
        <img src={newsImage} alt="News Visual" />
        <div className="counter-overlay">
          {inView && (
            <CountUp end={516} duration={2.5} start={0} delay={0}>
              {({ countUpRef }) => (
                <div className="counter-text">
                  <span ref={countUpRef} />+<br />
                  <span>Projects Created</span>
                </div>
              )}
            </CountUp>
          )}
        </div>
      </div>

      <div className="news-right">
        <h2>Latest News</h2>
        <p>
          Stay updated with our recent projects, achievements, and important
          industry news. From groundbreaking builds to award recognitions, our
          news section keeps you in the loop.
        </p>
        <Link to="/news" className="more-button">More</Link>
      </div>
    </section>
  );
};

export default NewsPreview;
