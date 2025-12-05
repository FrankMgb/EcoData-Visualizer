"use client";
import React from 'react';
import { LineChart } from 'lucide-react';

const QuickSightEmbed = () => {
    return (
        <section className="quicksight-section" id="charts">
            <div className="container">
                <div className="section-header">
                    <h2>Climate Change Over Time</h2>
                    <p>Analyze the trends of key indicators with interactive dashboards.</p>
                </div>

                <div className="dashboard-container">
                    <div className="dashboard-placeholder">
                        <LineChart size={48} className="placeholder-icon" />
                        <h3>Interactive Dashboard</h3>
                        <p>Connect to AWS QuickSight to view real-time climate data.</p>
                        <button className="btn btn-secondary btn-sm" style={{ marginTop: '1rem' }}>
                            Load Demo Data
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .quicksight-section {
          padding: 4rem 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .section-header h2 {
          margin-bottom: 0.5rem;
        }
        .section-header p {
          color: var(--text-secondary);
        }
        .dashboard-container {
          background-color: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .dashboard-placeholder {
          text-align: center;
          color: var(--text-secondary);
        }
        .placeholder-icon {
          color: var(--primary);
          margin-bottom: 1rem;
          opacity: 0.5;
        }
      `}</style>
        </section>
    );
};

export default QuickSightEmbed;
