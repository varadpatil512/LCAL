import React from 'react';
import './AppDownload.css';

const AppDownload = () => {
  return (
    <section className="appdownload section" id="app">
      <div className="container">
        <div className="appdownload__inner">
          <div className="appdownload__content">
            <div className="appdownload__badge badge badge-gold" style={{ marginBottom: '16px' }}>📱 Now Available</div>
            <h2 className="appdownload__title">App <span>Download</span></h2>
            <div className="section-divider" style={{ marginBottom: '16px' }} />
            <p className="appdownload__desc">
              Take LCAL with you everywhere. Track your games, view standings, watch live matches,
              and connect with fellow chess enthusiasts — all in one powerful app.
            </p>
            <ul className="appdownload__features">
              <li>♟ Live game tracking & analysis</li>
              <li>♟ Real-time standings & fixtures</li>
              <li>♟ Match video highlights</li>
              <li>♟ Player profiles & ratings</li>
            </ul>
            <div className="appdownload__buttons">
              <a href="#google-play" className="appdownload__store-btn" id="btn-google-play">
                <div className="appdownload__store-icon">▶</div>
                <div className="appdownload__store-text">
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href="#app-store" className="appdownload__store-btn" id="btn-app-store">
                <div className="appdownload__store-icon">⊕</div>
                <div className="appdownload__store-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="appdownload__visual">
            <div className="appdownload__phone">
              <div className="appdownload__phone-screen">
                <div className="appdownload__phone-header">
                  <span style={{ fontSize: '0.6rem', color: '#c9a227', fontFamily: 'Cinzel, serif', fontWeight: 700 }}>LCAL</span>
                </div>
                <div className="appdownload__phone-content">
                  <span className="appdownload__phone-piece">♞</span>
                  <div className="appdownload__phone-bar" />
                  <div className="appdownload__phone-bar" style={{ width: '70%' }} />
                  <div className="appdownload__phone-bar" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="appdownload__phone-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
