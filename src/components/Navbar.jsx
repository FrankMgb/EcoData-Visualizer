"use client";
import React from 'react';
import { BarChart3 } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    <BarChart3 className="logo-icon" />
                    <span className="logo-text">EcoData Visualizer</span>
                </div>
                <div className="nav-links">
                    <Link href="#home">Home</Link>
                    <Link href="#metrics">Data Metrics</Link>
                    <Link href="#features">Features</Link>
                </div>
                <div className="nav-actions">
                    <button className="btn btn-secondary btn-sm">Sign In</button>
                </div>
            </div>
            <style jsx>{`
        .navbar {
          background-color: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 1rem 0;
        }
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .logo-icon {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links :global(a) {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .nav-links :global(a:hover) {
          color: var(--primary);
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
