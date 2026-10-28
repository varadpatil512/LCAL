/**
 * Legal.jsx — Terms & Conditions + Privacy Policy
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Static.css';

const TERMS = [
  { id: 'terms',       heading: '1. Terms & Conditions', content: 'By accessing and using the LCAL website and participating in LCAL events, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.' },
  { id: 'eligibility', heading: '2. Eligibility', content: 'Participation in LCAL events is open to all individuals who register in accordance with the rules of each season. LCAL reserves the right to refuse or revoke membership at its discretion.' },
  { id: 'liability',   heading: '3. Limitation of Liability', content: 'LCAL shall not be liable for any direct, indirect, incidental, or consequential damages arising from your participation in events or use of this website. All participants take part at their own risk.' },
  { id: 'ip',          heading: '4. Intellectual Property', content: 'All content on this website, including logos, articles, and video content, is the intellectual property of LCAL unless otherwise stated. Unauthorised reproduction is prohibited.' },
  { id: 'privacy',     heading: '5. Privacy Policy', content: 'LCAL collects minimal personal information (name, email) solely for the purposes of event registration and communication. We do not sell or share your data with third parties. You may request deletion of your data at any time by contacting us.' },
  { id: 'cookies',     heading: '6. Cookies', content: 'This website may use essential cookies to maintain your session. We do not use advertising or tracking cookies. By using this site, you consent to our use of essential cookies only.' },
  { id: 'contact-legal', heading: '7. Contact', content: 'For legal enquiries, contact us at legal@lcal.in.' },
];

const Legal = () => {
  useEffect(() => { document.title = 'Legal | LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Legal</span>
          </p>
          <h1 className="page-header__title">Legal</h1>
        </div>
      </div>

      <section className="section section--bg">
        <div className="container">
          <div className="static-page">
            <aside className="static-page__toc" aria-label="Table of contents">
              <p className="static-page__toc-title">Contents</p>
              <ul>
                {TERMS.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>)}
              </ul>
            </aside>
            <div className="static-page__content">
              {TERMS.map(s => (
                <div key={s.id}>
                  <h2 id={s.id}>{s.heading}</h2>
                  <p>{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;
