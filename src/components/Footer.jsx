"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h4>EcoData Visualizer</h4>
                    <p>Empowering action through data.</p>
                </div>
                <div className="footer-section">
                    <h5>Resources</h5>
                    <a href="#">Documentation</a>
                    <a href="#">API</a>
                    <a href="#">Support</a>
                </div>
                <div className="footer-section">
                    <h5>Legal</h5>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
            <div className="container copyright">
                <p>&copy; {new Date().getFullYear()} EcoData Visualizer. All rights reserved.</p>
            </div>
            <style jsx>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
          border-top: 1px solid var(--border);
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-section h4 {
          margin-bottom: 1rem;
          color: var(--primary);
        }
        .footer-section h5 {
          margin-bottom: 1rem;
          font-size: 1rem;
          color: var(--text-primary);
        }
        .footer-section p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .footer-section a {
          display: block;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .footer-section a:hover {
          color: var(--primary);
        }
        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
