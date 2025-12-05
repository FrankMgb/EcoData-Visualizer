"use client";
import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Welcome to <span className="text-gradient">Climate Insights</span>
                </h1>
                <p className="hero-subtitle">
                    Explore key indicators and insights on climate change.
                    Visualize the data that matters most for our planet's future.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary">
                        Explore Metrics <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </button>
                    <button className="btn btn-secondary">
                        Request Access <Lock size={18} style={{ marginLeft: '0.5rem' }} />
                    </button>
                </div>
            </div>
            <style jsx>{`
        .hero {
          padding: 6rem 0 4rem;
          text-align: center;
          background: radial-gradient(circle at top center, rgba(56, 189, 248, 0.1) 0%, transparent 70%);
        }
        .hero-title {
          margin-bottom: 1.5rem;
          font-size: 3.5rem;
          letter-spacing: -0.02em;
        }
        .text-gradient {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-actions { flex-direction: column; align-items: center; }
          .btn { width: 100%; max-width: 300px; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
